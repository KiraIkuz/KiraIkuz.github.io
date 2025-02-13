
let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;

function preload() {
    image1 = loadImage("Pictures/Bread.jpg");
    image2 = loadImage('Pictures/Digimon.jpg');
    image3 = loadImage('Pictures/IronFlame.jpg');
    image4 = loadImage('Pictures/LatteArt.jpg');
    image5 = loadImage('Pictures/LOTRCollection.jpg');
    image6 = loadImage('Pictures/MyKibbies.jpg');
    image7 = loadImage('Pictures/P5R.jpg');

}

function setup() {
    createCanvas(800, 800);

   
}

function draw() {
     background(255, 0, 0);

     image(image3, 303, 2, 495, 495); //This is one of my favorite book series currently, Fourth Wing. Involves dragons, military, and steamy scenes.
     image(image2, 33, 2, 295, 295); // This is a picture of a Digimon. Specifically, my favorite one, BlackWarGreyMon. Digimon is what got me into wanting to make games. You could say it kickstarted me to where I am now, learning coding in college.
     image(image4, 497 , 437, 300, 300); // This is latte art that I did myself at my job! I enjoy latte art, and I am currently learning how to do a heart with foam. I love the validation it gives when a customer lights up at what I've done
     image(image5, 33, 337, 400, 400); // My Lord Of the Rings book collection! I look to collect more in the future, but I'm very proud of these two. The Green one is by Folio Society, and the second one is older at 1969! I love these copies with all of my life, and wouldn't trade them for anything.
     image(image6, 350, 437, 200, 300); // These are my babies! Though the one on the left, Ms. Kitty Girl passed away earlier in June, she is survived by the other two hams, Ms. Catra, and Mr. Bean, the two loves of my life.
     image(image7, 33, 200, 300, 200); // This is a picture of my favorite game, Persona 5 Royal! This game is so good, if you like video games, and especially JRPG's, I HIGHLY suggest it!
     image(image1, 300, 300, 200, 200); // This final picture is of some bread I proofed before I baked them! I love cooking, and especially making bread. I am always cooking something new for my partner and I, and bread can be a passion for me.
}