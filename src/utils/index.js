function sortArr(contacts, order, sortBy) {
  if (order === 'down') {
    return contacts.sort((a, b) =>
      a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
    );
  }
  return contacts.sort((a, b) =>
    a[sortBy] < b[sortBy] ? 1 : b[sortBy] < a[sortBy] ? -1 : 0
  );
}

function handleInputChange(data, inputChange, dataOrig, searchBy, order) {
  const dataOrigem = dataOrig;

  let dataFilter = data.filter(
    (el) => el[searchBy].toLowerCase().indexOf(inputChange.toLowerCase()) > -1
  );

  if (inputChange.trim() === '') {
    dataFilter = dataOrigem;
  }

  return sortArr(dataFilter, order, searchBy);
}

export { handleInputChange, sortArr };
