function formatSize(mb) {
    if (mb >= 1000) {
        return (mb/1000).toFixed(2) + ' GB';
    }
    return mb.toFixed(2) + ' MB';
}

function updateDiskUsageBar() {
    // Get disk quota and used values
    const quotaRow = Array.from(document.getElementsByClassName('stats_left'))
        .find(el => el.textContent.includes('Disk Quota'));
    const usedRow = Array.from(document.getElementsByClassName('stats_left'))
        .find(el => el.textContent.includes('Disk Space Used'));

    if (quotaRow && usedRow) {
        const quotaText = quotaRow.nextElementSibling.textContent.trim();
        const usedText = usedRow.nextElementSibling.textContent.trim();

        // Convert everything to MB for calculations
        const quota = quotaText.includes('GB') ? 
            parseFloat(quotaText) * 1000 : parseFloat(quotaText);
        const used = parseFloat(usedText);
        const free = quota - used;
        const percentage = (used / quota) * 100;

        // Update progress bar
        const usageBar = document.getElementById('diskUsageBar');
        usageBar.style.width = percentage + '%';
        
        // Change color based on usage
        if (percentage > 90) {
            usageBar.style.backgroundColor = '#d9534f'; // red
        } else if (percentage > 70) {
            usageBar.style.backgroundColor = '#f0ad4e'; // yellow
        } else {
            usageBar.style.backgroundColor = '#337ab7'; // blue
        }

        // Update text in bar
        document.getElementById('diskUsageText').textContent = 
            percentage.toFixed(1) + '% used';

        // Update details text
        document.getElementById('diskDetailsText').innerHTML = 
            `Used: ${formatSize(used)} | Free: ${formatSize(free)} | Total: ${formatSize(quota)}`;
    }
}

function moveDiskUsageToTop() {
    const mainStats = document.querySelector('#statsSection');
    const diskUsageStats = document.querySelector('#statsSection:last-of-type');
    
    if (mainStats && diskUsageStats) {
        // Get the parent element
        const parent = mainStats.parentNode;
        // Insert disk usage before the main stats
        parent.insertBefore(diskUsageStats, mainStats);
    }
}

function updateInodesBar() {
    // Get inodes row
    const inodesRow = Array.from(document.getElementsByClassName('stats_left'))
        .find(el => el.textContent.includes('Inodes Used'));

    if (inodesRow) {
        const inodesText = inodesRow.nextElementSibling.textContent.trim();
        // Extract numbers from format "2 % (1139 of 59400)"
        const matches = inodesText.match(/(\d+)\s*%\s*\((\d+)\s*of\s*(\d+)\)/);
        
        if (matches) {
            const percentage = parseFloat(matches[1]);
            const used = parseInt(matches[2]);
            const total = parseInt(matches[3]);
            const free = total - used;

            // Update progress bar
            const inodesBar = document.getElementById('inodesUsageBar');
            inodesBar.style.width = percentage + '%';
            
            // Change color based on usage
            if (percentage > 90) {
                inodesBar.style.backgroundColor = '#d9534f'; // red
            } else if (percentage > 70) {
                inodesBar.style.backgroundColor = '#f0ad4e'; // yellow
            } else {
                inodesBar.style.backgroundColor = '#337ab7'; // blue
            }

            // Update text in bar
            document.getElementById('inodesUsageText').textContent = 
                percentage.toFixed(1) + '% used';

            // Update details text
            document.getElementById('inodesDetailsText').innerHTML = 
                `Used: ${used.toLocaleString()} | Free: ${free.toLocaleString()} | Total: ${total.toLocaleString()}`;
        }
    }
}

// Modify the DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function() {
    updateDiskUsageBar();
    updateInodesBar();
    moveDiskUsageToTop();
    hideLoader();
});
