export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  const days = exdays * 24 * 60 * 60 * 1000;
  d.setTime(d.getTime() + days);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${encodeURIComponent(cvalue)};${expires};path=/`;
}

export function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const caArray = decodedCookie.split(';');
  for (let i = 0; i < caArray.length; i += 1) {
    let c = caArray[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
}

export function isIp(str) {
  const pattern = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  const result = str.match(pattern);
  return result;
}

export function isPort(str) {
  const pattern = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
  const result = str.match(pattern);
  return result;
}

export function isXLS(file) {
  let fileName = file.name.split('.');
  fileName = fileName[fileName.length - 1].toLowerCase();
  if (file.type === 'application/vnd.ms-excel' || fileName === 'xls') {
    return true;
  }
  return false;
}

export function isXLSX(file) {
  let fileName = file.name.split('.');
  fileName = fileName[fileName.length - 1].toLowerCase();
  if (
    file.type
      === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    || fileName === 'xlsx'
  ) {
    return true;
  }
  return false;
}
