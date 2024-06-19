export async function setData(url, path, data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    await fetch(`${url}${path}`, options).then((res) => res.json());
  } catch (error) {
    console.error();
  }
}
