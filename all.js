/* 
* This code was written by SpookyKipper (https://github.com/SpookyKipper/) and Deveroonie (https://github.com/Deveroonie/)
* This code is open source 
* DO NOT REMOVE CREDITS
*/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('option');

if (page == "accountsettings") {
	var PHPVERCHOOSEBTN = document.querySelector("#content > div > table.table > tbody > tr:nth-child(29) > td:nth-child(2) > a");
	PHPVERCHOOSEBTN.parentNode.removeChild(PHPVERCHOOSEBTN);
	var PHPver = document.querySelector("#content > div > table.table > tbody > tr:nth-child(29) > td:nth-child(2)");
	PHPver.innerHTML = PHPver.innerHTML.replace("7.0", "7.4");
}


function sidebarhide() {
    if (document.getElementById("sidebar") != null) {

        var sidebar = document.getElementById("sidebar"); //.style.display = "none"; //Remove Sidebar
        sidebar.parentNode.removeChild(sidebar);
        var mblesidebar = document.getElementById("btnSideBarToggle"); //.style.display = "none"; //Remove Sidebar Button on Mobile
        mblesidebar.parentNode.removeChild(mblesidebar);

        document.getElementById("imgPoweredByCpanel").style.display = "none"; //


    } else {
        setTimeout(sidebarhide, 100);
    }
}

function customisations() {


    if (document.getElementById("item_attracta_seotips") != null) {

        var element1 = document.querySelector("#software-body > div:nth-child(3)"); // hide SEO Tools - remove to unhide (its so old and outdated and 2012)
        element1.parentNode.removeChild(element1);



        var element5 = document.querySelector("#software-body > div:nth-child(1)"); // hide sitebuilder - remove to unhide (although it was shut down)
        element5.parentNode.removeChild(element5);




        var element11 = document.querySelector("#email-body > div:nth-child(5)"); // Webmail
        element11.parentNode.removeChild(element11);

        var element9 = document.querySelector("#email-body > div:nth-child(2)"); // ^^^
        element9.parentNode.removeChild(element9);

        var element7 = document.querySelector("#email-body > div:nth-child(1)"); // hide emailaccounts - remove to unhide (although it is paid)
        element7.parentNode.removeChild(element7);




        var element13 = document.querySelector("#databases-body > div:nth-child(4)"); // hide postgresql databases - remove to unhide (although it is paid)
        element13.parentNode.removeChild(element13);

        var element16 = document.querySelector("#databases-body > div:nth-child(3)"); // hide remotemysql - remove to unhide (it is paid, not applicable in free hosting)
        element16.parentNode.removeChild(element16);



        var element19 = document.querySelector("#preferences-body > div:nth-child(3)"); // hide change email - remove to unhide
        element19.parentNode.removeChild(element19);

        var element17 = document.querySelector("#preferences-body > div:nth-child(2)"); // hide change language - remove to unhide
        element17.parentNode.removeChild(element17);

        var element18 = document.querySelector("#preferences-body > div:nth-child(1)"); // hide change password - remove to unhide
        element18.parentNode.removeChild(element18);

        var element21 = document.querySelector("#metrics-body > div:nth-child(4)"); // hide access logs (its trash and no use) - remove to unhide
        element21.parentNode.removeChild(element21);


        var element20 = document.querySelector("#metrics-body > div:nth-child(2)"); // hide error logs (its trash and no use) - remove to unhide
        element20.parentNode.removeChild(element20);


        var element22 = document.querySelector("#soft_div-body > div"); // hide duplicated softaculous - remove to unhide
        element22.parentNode.removeChild(element22);

        var element23 = document.querySelector("#boxes > div:nth-child(11)"); // hide duplicated softaculous - remove to unhide
        element23.parentNode.removeChild(element23);

        if (typeof filelink != 'undefined' && filelink != null && typeof filelink === 'string') {
            console.log("filelink exists");
            document.getElementById("icon-file_manager").href = document.getElementById("icon-file_manager").href.replace("filemanager.ai", filelink);;
            document.getElementById("item_file_manager").href = document.getElementById("icon-file_manager").href.replace("filemanager.ai", filelink);;
            // ^^^ Replace File manager link to Custom (Make sure it's Monsta FTP Client, Set filelink Variable First NO HTTP(S) PROTOCOL OR TRAILING SLASH)
        }
        document.getElementById("icon-file_manager").href = document.getElementById("icon-file_manager").href.replace("http://", "https://");
        document.getElementById("item_file_manager").href = document.getElementById("item_file_manager").href.replace("http://", "https://");
        // ^^^ Replace File manager link to https


        //Repalce Tutorial Link to Custom Link (Set tutolink Variable First)
        if (typeof tutolink != 'undefined' && tutolink != null && typeof tutolink === 'string') {
            console.log("tutolink exists");
            var tutorialicon = document.querySelector("#icon-cloudflare_analytics");
            var tutorialtext = document.querySelector("#item_cloudflare_analytics");
            tutorialicon.href = tutolink;
            tutorialtext.href = tutolink;
        }


    } else {
        setTimeout(customisations, 100);
    }
}

function AddonDomainsHideSiteBuilderBtn() {



    if (page == "domains") {

        const btn = document.querySelectorAll('#subdomaintbl > tbody > tr > td > input.btn.btn-primary');
        console.log(btn.length);
        for (let i = 0; i < btn.length; i++) {
            //if (btn.item(i).value == "SiteBuilder" || btn.item(i).value == "Site Builder") {
            btn.item(i).parentNode.removeChild(btn.item(i));
            //}


        }
    } else if (page == "subdomains") {

        const btn = document.querySelectorAll("#subdomaintbl > tbody:nth-child(2) > tr > td > input.btn.btn-primary");
        console.log(btn.length);
        for (let i = 0; i < btn.length; i++) {
            //if (btn.item(i).value == "SiteBuilder" || btn.item(i).value == "Site Builder") {
            btn.item(i).parentNode.removeChild(btn.item(i));
            //}
        }
    }
}
setTimeout(sidebarhide, 100);
setTimeout(customisations, 100);
setTimeout(AddonDomainsHideSiteBuilderBtn, 100);
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

// Modify your existing DOMContentLoaded listener to include both functions
document.addEventListener('DOMContentLoaded', function() {
    updateDiskUsageBar();
    moveDiskUsageToTop();
});
/*! @preserve
*  Created on 14 September 2018 by woxly
*  Recreated on 30 August and modified on 03 September 2022 by Anyx
*  Last modified on 13 September 2022 by Anyx
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
document.addEventListener("DOMContentLoaded", function() {
    // Title
   if (AlterVP.title !== undefined) {
        document.title = AlterVP.title;
    }  
    // Protocol
   if (AlterVP.protocol !== undefined) {
        if (window.location.protocol.replace(/:/g,'') !== AlterVP.protocol) {
            location.protocol = AlterVP.protocol;
        }
    }
    // Logo
   if (AlterVP.logo !== undefined) {
        document.getElementById("imgLogo").src = AlterVP.logo;
    }
    // Themes
    if (AlterVP.theme !== undefined && AlterVP.category !== undefined) {
        if (AlterVP.category !== "lightspace") {
            themeURL = ['https://vpt.cdn.wybenetwork.com', AlterVP.theme, 'styles.css'].join("/");
            if (AlterVP.category == "normal") {
                iconURL = ['https://vpt.cdn.wybenetwork.com', AlterVP.theme, 'icon_spritemap.css'].join("/");
                icon = document.createElement('link');
                icon.type = 'text/css';
                icon.rel = 'stylesheet';
                icon.href = iconURL;
                document.head.appendChild(icon);
            }
        } else {
            themeURL = ['https://vpt.cdn.wybenetwork.com', AlterVP.theme, 'panel.css'].join("/");
        }
        theme = document.createElement('link');
        theme.type = 'text/css';
        theme.rel = 'stylesheet';
        theme.href = themeURL;
        document.head.appendChild(theme);
    }
    // Credits
    if (AlterVP.credits.logo !== undefined) {
        script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.innerHTML = "window.addEventListener('load',function(){document.getElementById('imgPoweredByCpanel').src=AlterVP.credits.logo})"
        document.body.appendChild(script)
    }
    if (AlterVP.credits.desc !== undefined) {
        document.getElementById("txtCpanelVersion").innerHTML = AlterVP.credits.desc;
    }
});
const AlterVP = {
    title: "cPanel",
    logo: "logo.png",
    protocol: "https",
    theme: "dark",
    category: "normal", // normal, lite, lightspace
    credits: {
    	desc: "Incofix Hosting / All Rights reserved - Free powerful web hosting services",
    	logo: "small-logo.png"
    }
};
