$(document).ready(() => {
  var streamList = ['0timado0',
    '17uu',
    '420jenkins',
    '7ckngmad',
    'AdmiralBulldog',
    'AmazHS',
    'Arteezy',
    'BigDaddy',
    'Chessie',
    'Clarkeezy',
    'Dendi',
    'Draskyl',
    'DreamLeague',
    'FollowAkke',
    'HSdogdog',
    'Moonmeander',
    'NoctisAK47',
    'Rafis0',
    'Solitary_Judge',
    'WagamamaTV',
    'WubWoofWolf',
    'abed_dota',
    'aliastar',
    'alohadancetv',
    'angelsimosu',
    'arise_3012',
    'attackerdota',
    'aui_2000',
    'bOne7',
    'babyknight',
    'bananaslamjamma',
    'barnyyy',
    'beyondthesummit',
    'beyondthesummit2',
    'beyondthesummit3',
    'beyondthesummit4',
    'blackdotatv',
    'blitzdota',
    'boris_dota',
    'braxton911',
    'brinkdota',
    'bububu',
    'canceldota',
    'ccncdota2',
    'chainsito11',
    'cr1tdota',
    'd47biryu',
    'day9tv',
    'dizzykitten',
    'dotacapitalist',
    'dotademon',
    'dotagasm',
    'dotamajor',
    'dotastarladder_en',
    'egm',
    'ek0p',
    'emperorpenguin83',
    'envybaer',
    'epicenter_en1',
    'epicenter_en2',
    'era17',
    'esl_dota2',
    'eternalenvyy',
    'evilgeniuses',
    'feardota',
    'febbydoto',
    'fogged',
    'forev',
    'freecodecamp',
    'funn1k',
    'godot',
    'gorgcc',
    'grandgrant',
    'h4nn1',
    'happystick',
    'hfndota',
    'himegurecia',
    'illidanstrdoto',
    'itshafu',
    'jeraxai',
    'jeyodude',
    'kano',
    'keemerah',
    'kennietv',
    'koushudota',
    'kvhdota',
    'lamperkat',
    'lil_hardy',
    'limmp',
    'lizzarddota2',
    'ltt98',
    'madaradota2',
    'matumbaman',
    'meraclechamlotte',
    'merlinidota',
    'midone',
    'mikah138',
    'miracle_doto',
    'miserytheslayer',
    'monkeys_forever',
    'moodota2',
    'moonducktv',
    'mssdota',
    'noobfromua',
    'nooneboss',
    'nurbika',
    'odpixel',
    'official_niqua',
    'ohaiyodota',
    'pajkattdota',
    'pgl_dota',
    'pikachama',
    'ppd',
    'puppey',
    'purgegamers',
    'qSnake_',
    'qodota2',
    'qojqva',
    'qsnake',
    'ramzesdoto',
    'reimudesu',
    'resolut1ontv',
    'rime_',
    'ritsugamer',
    's4',
    'sakurafrost225',
    'sheevergaming',
    'shigetora',
    'sing_sing',
    'siractionslacks',
    'smashdota',
    'sneykingdota',
    'spare',
    'stan_king',
    'stormspirittv',
    'sumaildoto',
    'synderen',
    'thijshs',
    'universedota',
    'vampyrette',
    'vanNDota',
    'vankhoahoang',
    'w33haa',
    'yapzordota',
    'yawar_',
    'zai',
    'zingle313',
    'zotac_cup'
  ];

  const moveTo = new MoveTo({
    tolerance: 1,
    duration: 1000,
    easing: 'easeOutQuart'
  });

  const target = $('#target');

  moveTo.move(target);
  const trigger = $('.js-trigger')[0];

  moveTo.registerTrigger(trigger);

  const clientID = "?client_id=em2uqxfm44rmjop2ism5iyga6778f5";
  const endpoint = "https://api.twitch.tv/kraken/channels/";
  const statuscheck = "https://api.twitch.tv/kraken/streams/";
  const twitchLink = "https://www.twitch.tv/";
  var array = [];
  streamList.forEach((el) => {
    $.ajax({
      method: "GET",
      url: endpoint + el + clientID,
      dateType: "json"
    }).then((twitch) => {
      $.ajax({
        method: "GET",
        url: statuscheck + el + clientID,
        dataType: "json"
      }).then((status) => {
        twitch.logo === null ? twitch.logo = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png" : twitch.logo = twitch.logo;
        if (status.stream != null) {
          var channel = "<tr id='" + el + "'><td><a href= '" + twitchLink + twitch.name + " 'target='_blank' style=' width: 100%; height: 123px;'><img src='" + twitch.logo + "' alt='logo' />" + twitch.name + "</a> </td>  <td><p>" + twitch.game + "</p></td> <td id='title'><p>" + twitch.status + "</p></td><td> <span id='green'></span>" + status.stream.viewers + "</td></tr>";
          if (array.length === 0) {
            array.push(status.stream.viewers);
            $("#online").append(channel);
          }
          // descending order online channel viewers
          for (var i = 0; i < array.length; i++) {
            if (status.stream.viewers > array[i]) {
              array.splice(i, 0, status.stream.viewers);
              var curTr = $("#online tr")[i];
              $(curTr).before(channel);
              break;
            } else if (i === array.length - 1 && array[i] > status.stream.viewers) {
              array.push(status.stream.viewers);
              $("#online").append(channel);
            } else if (i === 0 && array[0] < status.stream.viewer) {
              array.unshift(status.stream.viewers);
              $("#online").prepend(channel);
            }
          }
        } else {
          channel = "<tr id='" + el + "'><td><a href= '" + twitchLink + twitch.name + " 'target='_blank'><img src='" + twitch.logo + "' alt='logo' />" + twitch.name + "</a> </td>  <td><p>" + twitch.game + "</p></td> <td id='title'><p>" + twitch.status + "</p></td><td><p> Offline </p></td></tr>";
          $("#offline").append(channel);
        }
        var ID = "#" + el;
        $(ID).hover(() => {
          if (twitch.video_banner !== null) {
            $("body").css("background-image", "url(" + twitch.video_banner + ")")
          } else {
            $("body").css("background-image", "url('https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png')")
          }

        })
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    });
  });


});
