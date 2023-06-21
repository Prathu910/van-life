export async function getVans() {
  const response = await fetch("/api/vans");
  if (!response.ok) {
    throw new Error({
      message: "Failed to fetch data",
      statusText: response.statusText,
      status: response.status,
    });
  }
  const data = await response.json();

  return data.vans;
}

export async function getHostVans() {
  const response = await fetch("/api/host/vans");
  if (!response.ok) {
    throw new Error({
      message: "Failed to fetch data",
      statusText: response.statusText,
      status: response.status,
    });
  }
  const data = await response.json();

  return data.vans;
}
