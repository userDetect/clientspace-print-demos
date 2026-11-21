const list = document.querySelector('#list');
const search = document.querySelector('#search');
const channel = document.querySelector('#channel');
const progress = document.querySelector('#filter-progress');
const city = document.querySelector('#city');
for (const name of [...new Set(businesses.map(record => record.city))].sort((a,b) => a.localeCompare(b,'ru'))) {
  city.add(new Option(name,name));
}
const count = document.querySelector('#results');
const detail = document.querySelector('#detail');
const content = document.querySelector('#detail-content');
const storageKey = 'clientspace-print-outreach-v1';
const localPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);

function demoLink(record, page='index.html') {
  const crm = page === 'crm.html';
  return localPreview ? '../demos/' + encodeURIComponent(record.slug) + '/' + page : crm ? record.crm : record.demo;
}
let flags = {};
try { flags = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch {}
let sender = 'Антон';

function create(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(label, href, className = 'action') {
  const node = create('a', className, label);
  node.href = href;
  if (href.startsWith('https://') || href.startsWith('http://')) {
    node.target = '_blank';
    node.rel = 'noopener';
  }
  return node;
}

function button(label, handler, className = 'action') {
  const node = create('button', className, label);
  node.type = 'button';
  node.addEventListener('click', handler);
  return node;
}

function flag(record) {
  const caption = create('span', '', flags[record.slug] ? 'Написал' : 'Не написал');
  const wrapped = create('label', 'status-label');
  const checkbox = create('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!flags[record.slug];
  checkbox.setAttribute('aria-label', 'Отметка «Написал» для ' + record.name);
  checkbox.addEventListener('change', () => {
    flags[record.slug] = checkbox.checked;
    caption.textContent = checkbox.checked ? 'Написал' : 'Не написал';
    try { localStorage.setItem(storageKey, JSON.stringify(flags)); } catch {}
    if (progress.value) render();
  });
  wrapped.append(checkbox, caption);
  return wrapped;
}

function matches(record) {
  const query = search.value.trim().toLocaleLowerCase('ru');
  const haystack = [record.name, record.city, record.kind, record.url, record.address].join(' ').toLocaleLowerCase('ru');
  return haystack.includes(query)
    && (!city.value || record.city === city.value)
    && (!channel.value || record.contacts.some(item => item.key === channel.value))
    && (!progress.value || !!flags[record.slug] === (progress.value === 'written'));
}

function render() {
  const filtered = businesses.filter(matches);
  count.textContent = 'Показано ' + filtered.length + ' из ' + businesses.length;
  const rows = filtered.map(record => {
    const row = create('li', 'row');
    const title = create('div');
    const channels = create('div', 'row-channels');
    const actions = create('div', 'row-actions');
    title.append(create('h2', '', record.name), create('p', '', record.city + ' · ' + record.kind));
    for (const item of record.contacts) channels.append(link(item.label,item.href,'chip'));
    actions.append(link('Сайт', demoLink(record), 'action filled'), link('CRM', demoLink(record,'crm.html')),
      button('Контакты и письмо', () => open(record)));
    row.append(title, channels, actions, flag(record));
    return row;
  });
  list.replaceChildren(...(rows.length ? rows : [create('li','empty','По этим фильтрам компаний нет.')]));
}

function letter(record) {
  const panel = create('section', 'panel');
  const controls = create('div', 'actions');
  const feedback = create('span', 'subtle');
  feedback.id = 'copy-feedback';
  feedback.setAttribute('role', 'status');
  const message = create('pre', 'message');
  const actions = create('div', 'actions');
  const email = record.contacts.find(item => item.key === 'email');

  function setSender(value) {
    sender = value;
    message.textContent = record.messages[sender];
    feedback.textContent = '';
    for (const control of controls.children) {
      const selected = control.textContent === sender;
      control.classList.toggle('filled', selected);
      control.setAttribute('aria-pressed', selected);
    }

    const copy = button('Скопировать письмо', async () => {
      try {
        await navigator.clipboard.writeText(record.messages[sender]);
        feedback.textContent = 'Письмо скопировано.';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(message);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        feedback.textContent = 'Текст выделен. Скопируйте его сочетанием клавиш.';
      }
    });
    actions.replaceChildren(copy);
    if (email) {
      const to = encodeURIComponent(email.value);
      const subject = encodeURIComponent(record.subject);
      const body = encodeURIComponent(record.messages[sender]);
      actions.append(link('Открыть в Mail.ru', 'https://e.mail.ru/compose/?to=' + to + '&subject=' + subject + '&body=' + body));
    }
  }

  for (const name of ['Антон', 'Иван']) controls.append(button(name, () => setSender(name)));
  panel.append(create('h3', '', 'Письмо'), controls, create('p', 'subject', 'Тема — ' + record.subject), message, actions, feedback);
  setSender(sender);
  return panel;
}

function open(record) {
  document.querySelector('#detail-title').textContent = record.name;
  document.querySelector('#detail-city').textContent = record.city + ' · ' + record.kind;
  const refs = create('div', 'actions');
  refs.append(link('Демо сайта', demoLink(record), 'action filled'), link('Демо CRM', demoLink(record,'crm.html')),
    link('Действующий сайт', record.url));
  if (record.repo) refs.append(link('Репозиторий', record.repo));
  const contact = create('section');
  const contactLinks = create('div', 'actions');
  contact.append(create('h3', '', 'Контакты компании'), contactLinks);
  for (const item of record.contacts) {
    contactLinks.append(link(item.key === 'email' || item.key === 'phone' ? item.value : item.label, item.href));
  }
  if (!record.contacts.length) contactLinks.append(create('p', 'subtle', 'Контакты указаны на сайте компании.'));
  if (record.address) contact.append(create('p', 'address', record.address));

  const audit = create('details', 'panel audit');
  audit.append(create('summary', '', 'Аудит действующего сайта · ' + record.issues.length));
  const ordered = create('ol');
  for (const issue of record.issues) {
    const item = create('li');
    item.append(create('strong', '', issue.title), create('p', '', issue.evidence), create('p', '', 'Изменение в концепте — ' + issue.fix), link('Смотреть источник', issue.url, ''));
    ordered.append(item);
  }
  audit.append(ordered);
  const scope = create('p', 'address');
  const data = record.counts;
  if (data?.products) {
    const tariffs = data.rates ? ' · Тарифы: ' + data.rates : '';
    scope.textContent = 'Позиции в каталоге: ' + data.products + tariffs + ' · Раздел «' + data.label + '»';
  }
  content.replaceChildren(refs,...(scope.textContent ? [scope] : []),contact,letter(record),audit);
  detail.showModal();
}

document.querySelector('#close').addEventListener('click', () => detail.close());
detail.addEventListener('click', event => { if (event.target === detail) detail.close(); });
document.querySelector('#filters').addEventListener('submit', event => event.preventDefault());
for (const control of [search, channel, city, progress]) control.addEventListener('input', render);
render();
