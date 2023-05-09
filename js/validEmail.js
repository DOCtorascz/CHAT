export {valid}

function valid(strListMail) {
  const objDomen = {
    '.ru': '.ru',
    '.org': '.org',
    '.com': '.com',
    '.academy': '.academy',
    '.accountant': '.accountant',
    '.accountants': '.accountants',
    '.active': '.active',
    '.actor': '.actor',
    '.adult': '.adult',
    '.aero': '.aero',
    '.agency': '.agency',
    '.airforce': '.airforce',
    '.apartments': '.apartments',
    '.app': '.app', 
    '.archi': '.archi',
    '.army': '.army',
    '.associates': '.associates',
    '.asia': '.asia',
    '.adult': '.adult',
    '.aero': '.aero',
    '.attorney': '.attorney',
    '.auction': '.auction',
    '.audio': '.audio',
    '.autos': '.autos',
    '.biz': '.biz',
    '.cat': '.cat',
    '.coop': '.coop',
    '.dance': '.dance',
    '.edu': '.edu',
    '.eus': '.eus',
    '.family': '.family',
    '.fun': '.fun',
    '.gov': '.gov', 
    '.info': '.info', 
    '.int': '.int',
    '.jobs': '.jobs',
    '.mil': '.mil',
    '.mobi': '.mobi',
    '.museum': '.museum',
    '.name': '.name',
    '.net': '.net',
    '.one': '.one', 
    '.ong': '.ong',
    '.onl': '.onl',
    '.online': '.online',
    '.ooo': '.ooo',
    '.organic': '.organic',
    '.partners': '.partners',
    '.parts': '.parts', 
    '.party': '.party', 
    '.pharmacy': '.pharmacy', 
    '.photo': '.photo', 
    '.photography': '.photography', 
    '.photos': '.photos', 
    '.physio': '.physio', 
    '.pics': '.pics', 
    '.pictures': '.pictures', 
    '.feedback': '.feedback',
    '.pink': '.pink',
    '.pizza': '.pizza',
    '.place': '.place', 
    '.plumbing': '.plumbing', 
    '.plus': '.plus', 
    '.poker': '.poker', 
    '.porn': '.porn', 
    '.post': '.post', 
    '.press': '.press',
    '.pro': '.pro', 
    '.productions': '.productions', 
    '.properties': '.properties', 
    '.property': '.property', 
    '.qpon': '.qpon', 
    '.racing': '.racing', 
    '.recipes': '.recipes', 
    '.red': '.red', 
    '.rehab': '.rehab', 
    '.ren': '.ren', 
    '.rent': '.rent', 
    '.rentals': '.rentals',
    '.report': '.report', 
    '.republican': '.republican', 
    '.rest':'.rest', 
    '.review': '.review', 
    '.reviews': '.reviews', 
    '.rich': '.rich', 
    '.site': '.site', 
    '.tel': '.tel', 
    '.trade': '.trade', 
    '.travel': '.travel', 
    '.xxx': '.xxx', 
    '.xyz': '.xyz',
    '.yoga': '.yoga', 
    '.zone': '.zone', 
    '.ninja':'.ninja', 
    '.art': '.art', 
    '.moe': '.moe', 
    '.dev': '.dev',
  };

  let coincidences = null;

  for (const char in objDomen) {
    const indxDomen = strListMail.indexOf(objDomen[char]);
    const indxDomenRepeat = strListMail.indexOf(objDomen[char], indxDomen + 1);

    if (indxDomenRepeat != -1) {
      coincidences = "Повтор домена второго уровня: .com, .ru"
      break
    }

    const sliceDomenTwoLevel = strListMail.slice(indxDomen, strListMail.length)
    
    if (indxDomen != -1 && sliceDomenTwoLevel === objDomen[char] && (strListMail[indxDomen - 1]) != '.') {
      break
    } else {
      coincidences = "Неверное имя домена второго уровня: .com, .ru"
    }
  }

  const mailDogs = strListMail.indexOf('@')

  if (strListMail[mailDogs + 1] === '@') {
    coincidences = "Слишком много @@"
  }

  return coincidences
}
