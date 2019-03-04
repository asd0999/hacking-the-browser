///////////////////
///////////////////

function log(...args) {
  let message = args.join(' ');
  $('#log').prepend('--&gt; ' + message + '<br>');
}

function warn(...args) {
  log(...args);
  $('#log').addClass('warn');
}

function hideLog() {
  $('#log').hide();
}

function showLog() {
  $('#log').show();
}

function clearLog() {
  $('#log').empty();
}

window.onerror = (error) => {
  $('#log').addClass('error').text(`Error: ${error}`);
}

function checkSupportFor(name, propertyName, propertyOwner=window) {
  if (!(propertyName in propertyOwner)) {
    warn(`No support for ${name}`)
  } else {
    log(`Supports ${name}!`);
    return true;
  }
}

function isInIframe() {
  return window.parent !== window;
}

$(() => {
  log('Ready!');
  showLog();
  $('#clear-log').click(clearLog);
});

//////////////////
//////////////////

let batteryState = {
  level: 0,
  charging: false,
  chargingTime: Infinity,
  dischargingTime: Infinity
};

function updateStateFrom(battery, state) {
  Object.keys(state).forEach(key => {
    state[key] = battery[key];
  });
  state.percentage = state.level * 100;
  displayState(state);
  displayBatteryLevel(state);
  headerColor(state);
  batteryColor(state);
  chargingOrNot();
}

function chargingOrNot(){
    if(batteryState.charging){
      $('#battery-level-cap').css({'background-color':'green'})
      $('#battery-level-wrapper').css({'border': '2px solid green'})
    } else {
      $('#battery-level-cap').css({'background-color':'black'})
      $('#battery-level-wrapper').css({'border': '2px solid black'})
    }
}

function displayState(state) {
  Object.keys(state).forEach(key => {
    let elementId = key;
    let value = state[key];
    $('#' + elementId).text(value);
  });
}

function displayBatteryLevel(state) {
  $('#battery-level').css({
    width: state.percentage + '%'
  })
}

function batteryColor(state){
  if (state.level < 0.25) {
    // mostly red
    $('#battery-level').css({'background-color':'rgba(255,0,0,1)'})
  } else if (state.level > 0.75) {
    $('#battery-level').css({'background-color':'rgba(0,0,0,1)'})
  } else {
  //   $('#battery-level').css({'background-color':`rgba(${255-state.level*255},${255-state.level*255},${255-state.level*255}, 1)`})
  // }
$('#battery-level').css({'background-color':`rgba(${204-state.level*204},${204-state.level*204},${204-state.level*204}, 1)`})
  }
}

function headerColor(state) {
  // $('h1').css({'background-color': `rgba(255,0,0, ${1-state.level})`})
  if(batteryState.charging){
    $('h1').css({'color':'green'})
  } else {$('h1').css({'color':'none'})}
}

$(() => {
  if (checkSupportFor('Battery API', 'getBattery', navigator)) {
    startWatchingBattery();
  }
});

function startWatchingBattery() {
  navigator.getBattery().then(function(battery) {
    log('Got battery');

    updateStateFrom(battery, batteryState);

    let batteryEvents = [
      'chargingchange',
      'levelchange',
      'chargingtimechange',
      'dischargingtimechange'
    ];

    batteryEvents.forEach(function(eventName) {
      battery.addEventListener(eventName, () => {
        log('Got event: ' + eventName);
        updateStateFrom(battery, batteryState);
      });
    })
  });
}
