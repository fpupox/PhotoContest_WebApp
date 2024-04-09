export async function getProfiles () {
    const response = await fetch("https://supademo.ernestofreyre.com/api/profiles");
    const data = response.json();
    return data;
}