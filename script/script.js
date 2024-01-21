var unmuted = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
         <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
         <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
         <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
      </svg>
`;
var muted = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>`;

var win_array = [null,null,null];
const bg_audio = new Audio("bg_music1.mp3");

// Setting true to sound permission if it is not set
if(localStorage.getItem("is_sound_allowed")==null){
   localStorage.setItem("is_sound_allowed",true);
   var sound_permission = true;
}else{
   var sound_permission = localStorage.getItem("is_sound_allowed");
}

const click_music = new Audio("click_sound_music1.wav");

$(document).ready(()=>{
   var computer_btn = $(".computer_btn");
   var friends_btn = $(".friends_btn");
   var menu_btn = $(".menu_btn");

   // Hiding the fields at the initial point
   $("#play_with_friends").hide();
   $("#play_with_computer").hide();
   $("#game_mute").hide();
   $("#game_result").hide();
   computer_btn.on("click",()=>{
       $("#game_controls").hide();
       $("#play_with_computer").show();
       $("#game_mute").show();
   });

   friends_btn.on("click",()=>{
       $("#game_controls").hide();
       $("#play_with_friends").show();
       $("#game_mute").show();
   });

   menu_btn.on("click",()=>{
       $("#game_controls").show();
       $("#play_with_computer").hide();
       $("#play_with_friends").hide();
       $("#game_mute").hide();
   });

   var button = $(".mute_btn");
   button.on("click",function(){
      update_status();
   });

   var body = document.getElementById("body");
   body.addEventListener("click",function(){
      click_music.play();
   });

   function update_status(){
      if(button.attr("status")=="unmuted"){// Audio is unmuted so play audio when clicked
         button.attr("status","muted");
         button.html(unmuted);
         bg_audio.pause();

         localStorage.setItem("is_sound_allowed",false);
         sound_permission = localStorage.getItem("is_sound_allowed");
      }else if(button.attr("status")=="muted"){// Audio is muted so doesn't play audio when clicked
         button.attr("status","unmuted");
         button.html(muted);
         bg_audio.play();
         localStorage.setItem("is_sound_allowed",true);
         sound_permission = localStorage.getItem("is_sound_allowed");
      }
   }
   update_status();
});

