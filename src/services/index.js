export default async function getContacts() {
  try {
    const data = await fetch(
      'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'
    );

    if (!data) {
      return [];
    }

    return data.json();
  } catch (error) {
    return new Error('Bad request!');
  }
}
