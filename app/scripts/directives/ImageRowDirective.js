instagrammy.directive('imageRow', function(){
   return{
       restrict: 'E',
       scope: {images: '=', title: '@'},
       templateUrl: 'scripts/directives/directive_templates/ImageRowDirective.html',
       link: function(scope){
       }
   };
});