function createAssetContainer(asset) {
    let assetHTML = '';

    if (asset.asset_content_type === 'video') {
        assetHTML = `
            <div class="asset-container">
                <h3>${asset.asset_title}</h3>
                <p>${asset.asset_description}</p>
                <iframe width="560" height="315" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    } else if (asset.asset_content_type === 'threadbuilder' || asset.asset_content_type === 'article') {
        assetHTML = `
            <div class="asset-container">
                <h3>${asset.asset_title}</h3>
                <p>${asset.asset_description}</p>
                <textarea placeholder="Write your thoughts here..."></textarea>
            </div>
        `;
    }

    return assetHTML;
}
function renderTask(task) {
    let taskHTML = `
        <div class="task-container">
            <h2>${task.task_title}</h2>
            <p>${task.task_description}</p>
            <div class="assets">
    `;

    // Loop through each asset and append its HTML
    task.assets.forEach(asset => {
        taskHTML += createAssetContainer(asset);
    });

    taskHTML += `
            </div>
        </div>
    `;

    return taskHTML;
}
const projectData = {
    // The JSON data you provided goes here
};

const task = projectData.tasks[0]; // Assuming we want to render the first task
const taskHTML = renderTask(task);

// Append the rendered HTML to the page
document.getElementById('task-container').innerHTML = taskHTML;