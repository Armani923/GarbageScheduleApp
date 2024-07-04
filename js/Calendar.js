const TRASH_TYPES = {
    YELLOW_BAG: 'Gelber Sack',
    RESIDUAL: 'Restabfall',
    BIO: 'Bioabfall',
    PAPER: 'Papier',
    BRANCHES: 'Ast- und Strauchwerk',
    PROBLEMATIC: 'Problemstoffe'
};


var trashPickups = [
    {
    "date": "03.01.2024",
    "type": "Gelber Sack"
},
{
    "date": "04.01.2024",
    "type": "Restabfall"
},
{
    "date": "11.01.2024",
    "type": "Bioabfall"
},
{
    "date": "17.01.2024",
    "type": "Gelber Sack"
},
{
    "date": "18.01.2024",
    "type": "Restabfall"
},
{
    "date": "22.01.2024",
    "type": "Papier"
},
{
    "date": "25.01.2024",
    "type": "Bioabfall"
},
{
    "date": "26.01.2024",
    "type": " Ast- und Strauchwerk"
},
{
    "date": "31.01.2024",
    "type": "Gelber Sack"
},
{
    "date": "01.02.2024",
    "type": "Restabfall"
},
{
    "date": "08.02.2024",
    "type": "Bioabfall"
},
{
    "date": "14.02.2024",
    "type": "Gelber Sack"
},
{
    "date": "15.02.2024",
    "type": "Restabfall"
},
{
    "date": "19.02.2024",
    "type": "Papier"
},
{
    "date": "22.02.2024",
    "type": "Bioabfall"
},
{
    "date": "28.02.2024",
    "type": "Gelber Sack"
},
{
    "date": "29.02.2024",
    "type": "Restabfall"
},
{
    "date": "07.03.2024",
    "type": "Bioabfall"
},
{
    "date": "13.03.2024",
    "type": "Gelber Sack"
},
{
    "date": "14.03.2024",
    "type": "Restabfall"
},
{
    "date": "16.03.2024",
    "type": "Problemstoffe"
},
{
    "date": "18.03.2024",
    "type": "Papier"
},
{
    "date": "21.03.2024",
    "type": "Bioabfall"
},
{
    "date": "27.03.2024",
    "type": "Gelber Sack"
},
{
    "date": "28.03.2024",
    "type": "Restabfall"
},
{
    "date": "04.04.2024",
    "type": "Bioabfall"
},
{
    "date": "10.04.2024",
    "type": "Gelber Sack"
},
{
    "date": "11.04.2024",
    "type": "Ast- und Strauchwerk"
},
{
    "date": "15.04.2024",
    "type": "Papier"
},
{
    "date": "18.04.2024",
    "type": "Bioabfall"
},
{
    "date": "24.04.2024",
    "type": "Gelber Sack"
},
{
    "date": "25.04.2024",
    "type": "Restabfall"
},
{
    "date": "02.05.2024",
    "type": "Bioabfall"
},
{
    "date": "08.05.2024",
    "type": "Gelber Sack"
},
{
    "date": "11.05.2024",
    "type": "Restabfall"
},
{
    "date": "13.05.2024",
    "type": "Papier"
},
{
    "date": "16.05.2024",
    "type": "Bioabfall"
},
{
    "date": "22.05.2024",
    "type": "Gelber Sack"
},
{
    "date": "23.05.2024",
    "type": "Restabfall"
},
{
    "date": "30.05.2024",
    "type": "Bioabfall"
},
{
    "date": "05.06.2024",
    "type": "Gelber Sack"
},
{
    "date": "06.06.2024",
    "type": "Restabfall"
},
{
    "date": "10.06.2024",
    "type": "Papier"
},
{
    "date": "13.06.2024",
    "type": "Bioabfall"
},
{
    "date": "15.06.2024",
    "type": "Problemstoffe"
},
{
    "date": "19.06.2024",
    "type": "Gelber Sack"
},
{
    "date": "20.06.2024",
    "type": "Restabfall"
},
{
    "date": "27.06.2024",
    "type": "Bioabfall"
},
{
    "date": "03.07.2024",
    "type": "Gelber Sack"
},
{
    "date": "04.07.2024",
    "type": "Restabfall"
},
{
    "date": "08.07.2024",
    "type": "Papier"
},
{
    "date": "11.07.2024",
    "type": "Bioabfall"
},
{
    "date": "17.07.2024",
    "type": "Gelber Sack"
},
{
    "date": "18.07.2024",
    "type": "Restabfall"
},
{
    "date": "25.07.2024",
    "type": "Bioabfall"
},
{
    "date": "25.07.2024",
    "type": "Bioabfall"
},
{
    "date": "31.07.2024",
    "type": "Gelber Sack"
},
{
    "date": "01.08.2024",
    "type": "Restabfall"
},
{
    "date": "05.08.2024",
    "type": "Papier"
},
{
    "date": "08.08.2024",
    "type": "Bioabfall"
},
{
    "date": "14.08.2024",
    "type": "Gelber Sack"
},
{
    "date": "15.08.2024",
    "type": "Restabfall"
},
{
    "date": "22.08.2024",
    "type": "Bioabfall"
},
{
    "date": "28.08.2024",
    "type": "Gelber Sack"
},
{
    "date": "29.08.2024",
    "type": "Restabfall"
},
{
    "date": "02.09.2024",
    "type": "Papier"
},
{
    "date": "05.09.2024",
    "type": "Bioabfall"
},
{
    "date": "11.09.2024",
    "type": "Gelber Sack"
},
{
    "date": "12.09.2024",
    "type": "Restabfall"
},
{
    "date": "19.09.2024",
    "type": "Bioabfall"
},
{
    "date": "25.09.2024",
    "type": "Gelber Sack"
},
{
    "date": "26.09.2024",
    "type": "Restabfall"
},
{
    "date": "30.09.2024",
    "type": "Papier"
},
{
    "date": "05.10.2024",
    "type": "Bioabfall"
},
{
    "date": "09.10.2024",
    "type": "Gelber Sack"
},
{
    "date": "10.10.2024",
    "type": "Restabfall"
},
{
    "date": "17.10.2024",
    "type": "Bioabfall"
},
{
    "date": "23.10.2024",
    "type": "Gelber Sack"
},
{
    "date": "24.10.2024",
    "type": "Restabfall"
},
{
    "date": "28.10.2024",
    "type": "Papier"
},
{
    "date": "02.11.2024",
    "type": "Bioabfall"
},
{
    "date": "06.11.2024",
    "type": "Gelber Sack"
},
{
    "date": "07.11.2024",
    "type": "Restabfall"
},
{
    "date": "14.11.2024",
    "type": "Bioabfall"
},
{
    "date": "20.11.2024",
    "type": "Ast- und Strauchwerk"
},
{
    "date": "21.11.2024",
    "type": "Restabfall"
},
{
    "date": "23.11.2024",
    "type": "Problemstoffe"
},
{
    "date": "25.11.2024",
    "type": "Papier"
},
{
    "date": "28.11.2024",
    "type": "Bioabfall"
},
{
    "date": "04.12.2024",
    "type": "Gelber Sack"
},
{
    "date": "05.12.2024",
    "type": "Restabfall"
},
{
    "date": "12.12.2024",
    "type": "Bioabfall"
},
{
    "date": "18.12.2024",
    "type": "Gelber Sack"
},
{
    "date": "19.12.2024",
    "type": "Restabfall"
},
{
    "date": "23.12.2024",
    "type": "Papier"
},
{
    "date": "28.12.2024",
    "type": "Bioabfall"
}
];

const parseDate = dateString => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
};

const formatDate = date => 
    `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;

// Enhanced checkTrashPickup function
function checkTrashPickup(daysAhead = 1) {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysAhead);
    const formattedTargetDate = formatDate(targetDate);

    const pickups = trashPickups.filter(pickup => pickup.date === formattedTargetDate);

    if (pickups.length > 0) {
        const timeframe = daysAhead === 1 ? 'Tomorrow' : `In ${daysAhead} days`;
        return pickups.map(pickup => `Reminder: ${timeframe}, ${pickup.type} will be picked up.`).join('\n');
    }

    return `No trash pickup scheduled for ${daysAhead === 1 ? 'tomorrow' : `the next ${daysAhead} days`}.`;
}

// New function to get upcoming pickups
function getUpcomingPickups(days = 7) {
    const now = new Date();
    const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days);
    
    return trashPickups.filter(pickup => {
        const pickupDate = parseDate(pickup.date);
        return pickupDate >= now && pickupDate <= endDate;
    }).sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

// New function to render upcoming pickups
function renderUpcomingPickups() {
    const upcomingPickups = getUpcomingPickups();
    const upcomingList = document.getElementById('upcomingList');
    upcomingList.innerHTML = upcomingPickups
        .map(pickup => `<li>${pickup.date}: ${pickup.type}</li>`)
        .join('');
}

// New function to set custom reminder
function setCustomReminder() {
    const reminderDate = document.getElementById('reminderDate').value;
    const reminderType = document.getElementById('reminderType').value;
    
    if (reminderDate && reminderType) {
        const formattedDate = formatDate(parseDate(reminderDate));
        trashPickups.push({ date: formattedDate, type: reminderType });
        renderUpcomingPickups();
        alert('Custom reminder set successfully!');
    } else {
        alert('Please enter both date and type for the custom reminder.');
    }
}

// Initialize the app
async function initApp() {
    document.getElementById('reminder').textContent = checkTrashPickup();
    renderUpcomingPickups();


    // Set up event listeners
    document.getElementById('checkNextPickup').addEventListener('click', () => {
        const days = parseInt(document.getElementById('daysAhead').value) || 1;
        document.getElementById('reminder').textContent = checkTrashPickup(days);
    });

    document.getElementById('setReminder').addEventListener('click', setCustomReminder);

    await registerServiceWorker();
    await subscribeUserToPush();
}

// Call initApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('Service worker registered:', registration);
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    }
  }
  
  async function subscribeUserToPush() {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'YOUR_PUBLIC_VAPID_KEY'
    });
    
    // Send the subscription to your server
    await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  // Modified initApp function
  function initApp() {
    document.getElementById('reminder').textContent = checkTrashPickup();
    renderUpcomingPickups();
  
    // Set up event listeners
    document.getElementById('checkNextPickup').addEventListener('click', () => {
      const days = parseInt(document.getElementById('daysAhead').value) || 1;
      document.getElementById('reminder').textContent = checkTrashPickup(days);
    });
  
    document.getElementById('setReminder').addEventListener('click', setCustomReminder);
  
    // Register service worker and subscribe to push notifications
    registerServiceWorker().then(subscribeUserToPush);
  }
  
  // Call initApp when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initApp);
