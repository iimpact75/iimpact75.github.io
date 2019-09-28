const options = {weeday: 'long', day: 'numeric', month: 'numeric', year: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numeric'};
document.getElementById('updatednow').textContent = new Date(document.lastModified).toLocaleString(options);
