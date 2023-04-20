export const getTeamList = async () => {
	try {
		const response = await fetch('/teams');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching teams:', error);
    return [];
	}
};