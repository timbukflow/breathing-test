$(document).ready(function () {

    // slider function //
 
    $('.buttonNext').click(function() {

        var currentImg1         = $('.active1');
        var currentafterImg1    = $('.after1');
        var nextImg1            = currentImg1.next();
        var afterImg1           = currentImg1.after();
            
        var currentText         = $('.activetext')
        var nextText            = currentText.next();
        
        var currentImg2         = $('.active2');
        var currentafterImg2    = $('.after2');
        var nextImg2            = currentImg2.next();
        var afterImg2           = currentImg2.after();
        
        
        if (nextImg1.length) {
            nextImg1.addClass('active1');
            afterImg1.addClass('after1');
            
            nextText.addClass('activetext')
            
            nextImg2.addClass('active2');
            afterImg2.addClass('after2');
        }
            
        else {
            $('.img-first1').first().addClass('active1');
            $('.img-first1').last().addClass('after1');
            
            $('.text').first().addClass('activetext');
            
            $('.img-first2').first().addClass('active2');
            $('.img-first2').last().addClass('after2');
        }
        
        currentImg1.removeClass('active1');
        currentafterImg1.removeClass('after1');
            
        currentText.removeClass('activetext');
        
        currentImg2.removeClass('active2');
        currentafterImg2.removeClass('after2');
    });
     
});


