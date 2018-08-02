document.querySelector('#dice').addEventListener('click', function() {
  // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
     
    //2. Display the result
    
    var diceDOM = document.querySelector ('#dice-1');
    //var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';
    
    //desplay dialog
    var dialog = [
        ' আমি গরু ',
        ' আমি ছাগল ',
        ' আমি পাগল ',
        ' আমি হাতি ',
        ' আমি গন্ডার ',
        ' আমি লাল বানর ',
        ' আমি টয়লেট এর ময়লা',
        ' আমি গাঠা ',
        ' আমি পাঠা ',
        ' আমি আলু পচা ',
        ' আমি ডিম পচা ',
        'আমি কাঠাল পচা',
        ' আমি ডিম পচা',
        'আমি আম পচা',
        'আমি মাছ পচা',
        'আমি ট্মেটু পচা',
        'আমি মাছি ',
        ' আমি কালা ',
        ' আমি দেন্দা ',
        ' আমি টাকলা ',
        ' আমি  পাকনা ',
        'আমি  ভালো ',
        'আমি সুই',
        ' আমি  সুন্দর ',
        'আমি  পেটুক ',
        ' আমি  গবেট',
        ' আমি  মদন',
        'আমি পাদ',
        'আমি  ভালো',
        'আমি  ভালো',
        'আমি  ভালো',
        'আমি  ভালো',
    ];
    var rendomdailog = Math.floor(Math.random() * 32);
    
    if(dice == 1){
        document.querySelector('#m1').textContent = dialog[rendomdailog];
        document.querySelector('#m2').textContent ="মৃদুলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m3').textContent = "মৃদুলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m4').textContent = "মৃদুলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m5').textContent = "মৃদুলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m6').textContent = "মৃদুলা ঠিক বলছে... হা হা হা";
        
        
    } else if(dice == 2){
        document.querySelector('#m2').textContent = dialog[rendomdailog];
         document.querySelector('#m1').textContent = " মৃথিলা ঠিক বলছে... হা হা হা";
        
        document.querySelector('#m3').textContent = " মৃথিলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m4').textContent = " মৃথিলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m5').textContent = " মৃথিলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m6').textContent = " মৃথিলা ঠিক বলছে... হা হা হা";
        
    }else if(dice == 3){
        document.querySelector('#m3').textContent = dialog[rendomdailog];
        document.querySelector('#m1').textContent = "নুসাইবাহ ঠিক বলছে... হা হা হা";
        document.querySelector('#m2').textContent =" নুসাইবাহ ঠিক বলছে... হা হা হা";
        //document.querySelector('#m3').textContent = " নুসাইবাহ ঠিক বলছে... হা হা হা";
        document.querySelector('#m4').textContent = " নুসাইবাহ ঠিক বলছে... হা হা হা";
        document.querySelector('#m5').textContent = " নুসাইবাহ ঠিক বলছে... হা হা হা";
        document.querySelector('#m6').textContent = " নুসাইবাহ ঠিক বলছে... হা হা হা";
    }else if(dice == 4){
        document.querySelector('#m4').textContent = dialog[rendomdailog];
        document.querySelector('#m2').textContent = " নাওয়ার ঠিক বলছে... হা হা হা";
         document.querySelector('#m1').textContent = " নাওয়ার ঠিক বলছে... হা হা হা";
        
        document.querySelector('#m3').textContent = " নাওয়ার ঠিক বলছে... হা হা হা";
        //document.querySelector('#m4').textContent = " নাওয়ার ঠিক বলছে... হা হা হা";
        document.querySelector('#m5').textContent = " নাওয়ার ঠিক বলছে... হা হা হা";
        document.querySelector('#m6').textContent = " নাওয়ার ঠিক বলছে... হা হা হা";
    }else if(dice == 5){
        document.querySelector('#m5').textContent = dialog[rendomdailog];
         document.querySelector('#m2').textContent = " নাবিলা ঠিক বলছে... হা হা হা";
         document.querySelector('#m1').textContent = " নাবিলা ঠিক বলছে... হা হা হা";
        
        document.querySelector('#m3').textContent = " নাবিলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m4').textContent = " নাবিলা ঠিক বলছে... হা হা হা";
        //document.querySelector('#m5').textContent = " নাবিলা ঠিক বলছে... হা হা হা";
        document.querySelector('#m6').textContent = " নাবিলা ঠিক বলছে... হা হা হা";
    }else{
        /*document.querySelector('#m6').textContent = dialog[rendomdailog];
        document.querySelector('#m2').textContent = " নাহিদ মামা ঠিক বলছে... হা হা হা";
         document.querySelector('#m1').textContent = " নাহিদ মামা ঠিক বলছে... হা হা হা";
        
        document.querySelector('#m3').textContent = " নাহিদ মামা ঠিক বলছে... হা হা হা";
        document.querySelector('#m4').textContent = " নাহিদ মামা ঠিক বলছে... হা হা হা";
        document.querySelector('#m5').textContent = " নাহিদ মামা ঠিক বলছে... হা হা হা";*/
        document.querySelector('#m6').textContent = "তো্মরাই বল আমি কেমন?";
        document.querySelector('#m2').textContent = " মামার মত মানুষ হয় না";
         document.querySelector('#m1').textContent = " মামা অনেক ভালো";
        
        document.querySelector('#m3').textContent = " চাচা অনেক সুন্দর...হি!হি";
        document.querySelector('#m4').textContent = " চাচাকে ছাড়া দিনটাই ভালো যায় না";
        document.querySelector('#m5').textContent = " চাচাকে আমি অনেক ভালোবাসি";
        
    }
    
});