import { API_BASE_PATH } from './constants';

const api = (path, options) => {
	const p = `${API_BASE_PATH}${path}`;
	return fetch(p, {
		...options,
		headers: {
			...options?.headers,
			'Authorization': `Bearer ${process.env.COCKPIT_API_KEY}`
		}

	});
}

export async function getAllCollections() {
  const response = await api(`api/collections/listCollections`);
  const json = await response.json();
  return json;
}

export async function getCollectionEntries(collection) {
	const response = await api(`api/collections/get/${collection}`, {
		method: 'post',
	  body: JSON.stringify({
        filter: { published:true },
        fields: {_by: 1 },
        populate: 1, // resolve linked collection items
    })
	});
	const json = await response.json();
	return json;
}

export async function getProjectById(id) {
  const response = await api(`api/collections/get/project?filter[_id]=${id}`);
  const json = await response.json();
  return json;
}

export async function getAllSingletons() {
  const response = await api(`api/singletons/listSingletons`);
  const json = await response.json();
  return json;
}

export async function getSingleton(name) {
  const response = await api(`api/singletons/get/${name}?populate=1`);
  const json = await response.json();
  return json;

}