    document.addEventListener("DOMContentLoaded", function() {
      const testimonials1 = [
        { name: "Cen Seven", server: "Phoenix", text: "Haven't seen a place with so much love up into it in a while - the house, the staff, the website, the rooms - seriously amazing! Keep it up" },
        { name: "Corus Po'rashun", server: "Sagittarius", text: "Never have I seen such impressive handwork with the vodka. 10/10" },
        { name: "Circe Caster", server: "Omega", text: "Thank you for the amazing chimken! Got stuck in jumping puzzle so had to log off xD <3" },
        { name: "Doro Lalayon", server: "Twintania", text: "Doro was here, good place... aggghhhh jumping puzzles" },
        { name: "Hihimai Popomai", server: "Sagittarius", text: "atmosphere is great also drinks so why not" },
        { name: "Yoppie Wild", server: "Sagittarius", text: "Is still fun uwu :3" },
        { name: "Leorio Visasch", server: "Louisoix", text: "Very nice bar to come and have a drink" },
        { name: "Karliah Azure", server: "Ragnarok", text: "A very friendly place and warm welcoming staff" },
        { name: "Eoxas Nice'caulk", server: "Sagittarius", text: "Caulk was satisfied" },
        { name: "Yoppie Wild", server: "Sagittarius", text: "Is fun uwu :3" },
        { name: "Soma Vermillion", server: "Odin", text: "Cozy and welcoming here! I love it =u=" },
        { name: "Max Gunch", server: "Phantom", text: "Lovely little spot for a drink, will visit again :)" },
        { name: "Lou Brickkent", server: "Phantom", text: "Love the Tiki bar, great drinks and great service <3" },
        { name: "Glacya Sagitta", server: "Spriggan", text: "A really lovely place, with nice ambiance and relaxing music. I loved my stay here and I can't wait to be back next time ^^" },
        { name: "Logos Strife", server: "Sagittarius", text: "Beautiful place with extremely welcoming and kind people" },
        { name: "Edible Falafel", server: "Twintania", text: "Cosy venue! °°° α« α« ψ( • ω • )" },
        { name: "Rosa Valentine", server: "Phantom", text: "Really gorgeous venue with even more gorgeous people ♥" },
        { name: "Callisto Altalune", server: "Omega", text: "Very pretty and relaxing place. Feels like a real getaway. Very enjoyable <3" },
        { name: "Pomhub Ceo", server: "Sagittarius", text: "floor inspecctor is here to inspecc again" },
        { name: "Merlstyr Styrmleita", server: "Ragnarok", text: "very pretty place <3" },
        { name: "Xiyl Mal", server: "Raiden", text: "great place, great people, great jump puzzles!" },
        { name: "Mallesa Tesanu", server: "Cerberus", text: "Great place and well done with a cool idea ♥" },
        { name: "Michi Edelgard", server: "Ragnarok", text: "smol chinken worked here" },
        { name: "Sehnsucht Immer", server: "Alpha", text: "10/10 ordered fish n chips" },
        { name: "Sipher Ous", server: "Sagittarius", text: "You have built something beautiful. Perfect match to the hostess, and I fell for her all over again." },
        { name: "Pinczu Shiro", server: "Ragnarok", text: "Cute place i recomend it" },
        { name: "Valkyrie Silver", server: "Louisoix", text: "Good drinks, good fights, lost my soul, 10/10." },
        { name: "Yui Dotharl", server: "Phantom", text: "Because of this fine venue I had a pleasure being judge on the glorious Bo3 duel in Wolf's den!" },
        { name: "Pomhub Ceo", server: "Sagittarius", text: "nice floor" },
        { name: "Lumi Kuu", server: "Spriggan", text: "Nicest looking place for a while. Love the atmosphere ♥" },
        { name: "Kiki Ze'niki", server: "Raiden", text: "Best venue I have seen in a long time! Awesome vibes, wonderful design, great concept! Moon & Kiki xoxo" },
        { name: "Renarin Storm", server: "Sagittarius", text: "Thanks for the JP, I beat it first time, only took a few seconds to reach the top!" },
        { name: "Heidi Farron", server: "Louisoix", text: "This place is awsome. I need those bat pumpkins" },
        { name: "Vex Sephtis", server: "Zodiark", text: "WOW! Really nice decorations :3" },
        { name: "Thirion Tritonia", server: "Zodiark", text: "Such a lovely place!!! <3" },
        { name: "Mini'bob Ross", server: "Zodiark", text: "*can't reach the book properly!* *illegible scribblings*" },
        { name: "Elle Kanza", server: "Moogle", text: "Awesome decoration, amazing vibes, great place :D" },
        { name: "Erya Valya", server: "Sagittarius", text: "Great atmosphere, amazing job with the decoration, I hope everyone keeps having fun in here ♥" },
        { name: "Pomhub Ceo", server: "Sagittarius", text: "nice bar" },
        { name: "Vanc Angel", server: "Raiden", text: "Stunning location, beautiful gose location! ^_^ ♥" },
        { name: "Jasmine Draconia", server: "Alpha", text: "lovely (: i enjoyed the jumping puzzle. n the bartenders are funny" },
        { name: "Fis Herman", server: "Louisoix", text: "The effort that is seen in this house is really worth every praise. From the decor to the puzzles, all rounded up with great people inside. 10/10" },
        { name: "Catbosylim Smash", server: "Louisoix", text: "One of the most beautiful venues I've seen. Nice hosts and interesting puzzles. I'll be back B)" },
        { name: "Lorilae Lesrekta", server: "Sagittarius", text: "love to be here. I had to lose my girlfriend in the bottomless pit, but it's OK" },
        { name: "Selina Eileen", server: "Sagittarius", text: "Nice location ; )" },
        { name: "Barinn Thensi", server: "Ragnarok", text: "very nice place! great place to relax. will be coming back!" },
        { name: "Peach'n Raspberry", server: "Zodiark", text: "HAS BIG FISHIES! FISHIES ARE SCARY!! Drinks are good, bar staff are nice. But no to the fishies!!!!!!! :(" },
        { name: "Aniki Bob", server: "Sagittarius", text: "I live nearby and I didn't know we had this! Stock prices go vroooooooooom" },
        { name: "Il Ya", server: "Sagittarius", text: "Best venue I've ever seen hands down!" },
        { name: "Papsu Papsu", server: "Spriggan", text: "Waaaaa" },
        { name: "Prince Samael", server: "Spriggan", text: "lovely establishment, congratulations with the grand opening :)" },
        { name: "Patrick Yaeger", server: "Zodiark", text: "Love the design :)" },
        { name: "Lucie Lionheart", server: "Twintania", text: "Awesome atmosphere and people <3" },
        { name: "Rose Lovelace", server: "Twintania", text: "Very adorable place" },
        { name: "Lilimarie Fla'me", server: "Louisoix", text: "Nice party. Thank you for the invite. Much love! <3" },
        { name: "Prin Talino", server: "Phantom", text: "Cozy, Enjoyable, and a Parkour worth looking into." },
        { name: "Freyja Moonlight", server: "Phantom", text: "Very cozy and cute! <3" },
        { name: "Dreamful Alice", server: "Spriggan", text: "Club tiki drinks are freeeeee! Fun and sunshine theres enough for everyone! all thats missing is the sea :( but dont worry, you can sun tan!" },
        { name: "Desya Ilyich", server: "Sagittarius", text: "Best tiki bar aaaaah!" },
        { name: "Meiko Chu", server: "Louisoix", text: "Stuck in stairs, broke both legs :<" },
        { name: "Jynxxie O'haii", server: "Omega", text: "Beautiful bar, amazing atmosphere! ♥" },
        { name: "Yaropol Asvana", server: "Omega", text: "10/10 would visit the void again. (it's pretty cosy)" },
        { name: "Bep Toot", server: "Odin", text: "beautifullllllllll" },
        { name: "Cocoa Powder", server: "Omega", text: "woaah!! sick design ♥" },
        { name: "Secrov Stardream", server: "Odin", text: "Lovely, place and lovely people. What more can one ask for?" },
        { name: "Kittynub Ragstara", server: "Zodiark", text: "Really cute tiki bar! 10/10 design! ❤️❤️❤️❤️❤️" },
        { name: "Siandr Mandragor", server: "Moogle", text: "Well done! :) The Tiki Bar is a great place :)" },
        { name: "Rapsus Ackus", server: "Cerberus", text: "Rapsus war hier" },
        { name: "Xora Chi", server: "Phoenix", text: "Amzinngg woorkk !!! I love it <3" },
        { name: "Celna Vopisel", server: "Sagittarius", text: "I love how the place turn up, keep up good work!" },
        { name: "Zinger Kay-effcee", server: "Sagittarius", text: "Nice place, but no vodka ;^;" },
        { name: "Kuva Bowbringer", server: "Sagittarius", text: "9/10, point pending when vodka is restocked" },
        { name: "Marcelene Minara", server: "Sagittarius", text: "So pretty <3" },
        { name: "Lolo Wololo", server: "Phantom", text: "\\o/" },
        { name: "Palchinett Fyllistine", server: "Omega", text: "Cozy bar is a cool bar!" },
        { name: "Oz Polaris", server: "Omega", text: "It's quite a cute bar" },
        { name: "Isiah Panda", server: "Sagittarius", text: "Really lovely ^_^ good job :D" },
        { name: "Baron Volfas", server: "Ragnarok", text: "Amazing Place you did really great work !! ♥" },
        { name: "K'ricket Sweetvale", server: "Ragnarok", text: "Best tiki bar I've ever seen in or out of Eorzea!" },
        { name: "Artelies Fwall", server: "Odin", text: "This is amazing!!! Truly, one of the best places around :D! Well done!" },
        { name: "Abtgr Meatlusch", server: "Sagittarius", text: "Great !!!!" },
        { name: "Lilly Rosewood", server: "Sagittarius", text: "WOW I'm impressed <3" }
      ];

      const testimonials2 = [
        { name: "Lana Akai", server: "Lich", text: "The cake is a lie" },
        { name: "Boo Bas", server: "Odin", text: "where mustache man?!" },
        { name: "Chicken Bear", server: "Odin", text: "where da moustache man" },
        { name: "Thira Isobe", server: "Shiva", text: "It was a cool puzzle! Thank you! :D" },
        { name: "Nyanr Meowsalot", server: "Lich", text: "Really well done maze, dare I say a-maze-ing" },
        { name: "Deotle Bird", server: "Moogle", text: "Got lost multiple times. Yet found all three secrets. Nice job" },
        { name: "Ry Anesis", server: "Phantom", text: "That was a lot of fun, thank you!" },
        { name: "Izolanta Hexova", server: "Sagittarius", text: "good!!!! ♥" },
        { name: "Krays Hexov", server: "Sagittarius", text: "scary i like" },
        { name: "Ji-eun Yang", server: "Phantom", text: "3/3 completed! Very nice maze" },
        { name: "Selyah Feanor", server: "Moogle", text: "Amazing maze, (3/3 objectives :D ) Congrats for your housing skills and your website :)" },
        { name: "Ruhi Niyati", server: "Omega", text: "Awesome! I loved it! Thanks for the great experience!" },
        { name: "Uvot Roda", server: "Omega", text: "3/3 objectives found. Very well done! I was never here...." },
        { name: "Alpha Shadow", server: "Spriggan", text: "Zaebis!" },
        { name: "Kae Melo", server: "Louisoix", text: "OKAY OKAY THIS IS WAY TOO COOL why is this better than FFXIV official events??" },
        { name: "Mallesa Tesanu", server: "Cerberus", text: "Great place. Had a lot of fun :D" },
        { name: "Koko Beki", server: "Spriggan", text: "AMAZEING!" },
        { name: "Complete Loser", server: "Omega", text: "Fun. Thank you, friend." },
        { name: "Maria Neonus", server: "Omega", text: "I found this very difficult. Nice job :D" },
        { name: "Kharneth Avacyn", server: "Spriggan", text: "Wonderful experience!" },
        { name: "Yuusei Hoshikawa", server: "Omega", text: "Awesome maze!! I REALLY enjoyed my time here! thank you for your hardwork!! <3" },
        { name: "Lilith Pendrake", server: "Omega", text: "Forgiveness is devine, but never pay full price for late pizza" },
        { name: "Myr Rita", server: "Spriggan", text: "Fun and disorientating with all the ways to return to the start" },
        { name: "Mi'sha Stardust", server: "Omega", text: "Quite fun! Hope the designer got lots of cookies for this." },
        { name: "Tamuh Tabuia", server: "Ragnarok", text: "I had much fun! 10/10 would do it again" },
        { name: "Release Id", server: "Moogle", text: "Amazingly well crafted fun experience!" },
        { name: "Alianne Rayyne", server: "Omega", text: "Brilliant design and very fun! Now the cake IS a lie... but i swear it was good!" },
        { name: "Ob Sidian", server: "Lich", text: "Super fun and inventive maze! Spooky theme park vibes :D First event venue I've been to and loved it" },
        { name: "Barbar O'rhum", server: "Twintania", text: "The torture parkour was the real torture" },
        { name: "Menelhore Mezonducafe", server: "Twintania", text: "That was A-MAZE-ING! Gotta keep an eye on this club for future puzzles. :)" },
        { name: "Morgana Obaska", server: "Odin", text: "Had an awesome time, fun maze you put together" },
        { name: "Jim Zee", server: "Ragnarok", text: "Very good nice" },
        { name: "Tarlon Lahofaux", server: "Spriggan", text: "We lost three people in the maze, but found the cake! They are still there. cake/10" },
        { name: "Miguel Lenoir", server: "Omega", text: "Very fun maze and very fun venue (counting with the cafe), looking forward to see more and more!" },
        { name: "Laerta Warpstone", server: "Omega", text: "Amazing work! Thanks to architects!^^ and yes~ The cake is a lie~" },
        { name: "L'hewo Tia", server: "Sagittarius", text: "That was amazing! ♥ That maze was so fun!" },
        { name: "Aneko Salvatore", server: "Sagittarius", text: "Big fun scary maze !!! Thank you guys I had a lot of fun !!!" },
        { name: "Liloutte Prowler", server: "Moogle", text: "Amazing experience, such creativity! I spent way too much time here, but it was worth it! ♥" },
        { name: "Black Pampa", server: "Moogle", text: "awesome maze, no cannibalism required!" },
        { name: "Oz Polaris", server: "Omega", text: "Man, they really do mean watch the instructional video" },
        { name: "Scoot Tayuun", server: "Shiva", text: "Awesome maze, thanks!" },
        { name: "Estan Parnulli", server: "Sagittarius", text: "Covered in darkness, lost in the maze. Escaped torture chamber, how I did it, don't remember. Cake I found, was a pie. Finally got Brina, thanks to Fortuna." },
        { name: "Hypatos Archelaus", server: "Zodiark", text: "Super fun, keep up the great work" },
        { name: "Mi'zuli Raenai", server: "Spriggan", text: "I had a wonderful time :)" },
        { name: "Youmu Saigyouji", server: "Spriggan", text: "something funny, make me laugh, say a joke" },
        { name: "Velvet Mayvin", server: "Spriggan", text: "So clever, had a great time! Thank you and happy Halloweeb <3" },
        { name: "Tallula Ejinn-salt", server: "Ragnarok", text: "thank u so much for a super fun halloween for our gang of halloweenies" },
        { name: "Captain Boop", server: "Ragnarok", text: "Very Spooky, very fun!" },
        { name: "Laurence Ironraven", server: "Zodiark", text: "i just dragooned in this maze" },
        { name: "Phara Low-wasamistake", server: "Phoenix", text: "Awesome Maze :) This was fun!" },
        { name: "Neko Hime", server: "Odin", text: "it went everywhere!" },
        { name: "Shizu Kaze", server: "Shiva", text: "This was amazing! Thank you so much!" },
        { name: "Raining Storm", server: "Omega", text: "Thank you for having us, such a lovely FC night out!!! <3" },
        { name: "Loki Sowilo", server: "Phoenix", text: "I admit defeat, I found the cake but the maze has bested me. 10/10" },
        { name: "Melana Renan", server: "Phantom", text: "This place is wonderful and amazing! Enjoy the maze! \\o/" },
        { name: "Iceberg Ksf", server: "Louisoix", text: "Trop drôle la flèche et original bravo :)" },
        { name: "Yano Chi", server: "Cerberus", text: "A..after getting lost in the maze I ended up in the torture room YY it was a … fun experience ;w; 10/10" },
        { name: "Masha'to Nbolon", server: "Sagittarius", text: "This maze is sooooooo nice and awesome!!" },
        { name: "Yuki Sakimuri", server: "Moogle", text: "Very maze" },
        { name: "Feet Enjoyer", server: "Sagittarius", text: "Amazing and fun experience, getting lost in the abyss was my personal favorite" },
        { name: "Eat Egg", server: "Moogle", text: "I love mazes" },
        { name: "Avoii Ding", server: "Moogle", text: "Nice" },
        { name: "Ciel Yukumo", server: "Sagittarius", text: "Funniest experience I've had with housing in this game ever, best half hour of my life, invite your friends here!" },
        { name: "Ruru Lulu", server: "Phoenix", text: "Good fun, many times in walls, would do again 10/10" },
        { name: "Arturo Tardass", server: "Ragnarok", text: "Was a fun maze, thanks for making it :>" },
        { name: "Zero Britannia", server: "Omega", text: "Wow how do people create this" },
        { name: "Felix Alamaty'i", server: "Sagittarius", text: "Ran in circles for an hour and still didn't find everything. 7/5 would panic run in circles again" },
        { name: "Aries Valerian", server: "Sagittarius", text: "Amazingly well designed and executed! So much fun!" },
        { name: "Big Noob", server: "Sagittarius", text: "Calca is so well hidden! I loved this" },
        { name: "Copcil Xi", server: "Sagittarius", text: "Was amazing! We had a lot of fun!!" },
        { name: "Mio Sarai", server: "Sagittarius", text: "Got lost a lot found all 3 rooms such a clever maze :)" },
        { name: "Aranea Lumin", server: "Sagittarius", text: "This was super cool and fun!!!" },
        { name: "Loreah Lumin", server: "Sagittarius", text: "Found the 3 rooms! Amazing place! <3" },
        { name: "Ash Crimson", server: "Ragnarok", text: "Great idea doing that maze!" },
        { name: "Pomhub Ceo", server: "Sagittarius", text: "so coooooooooooooooooooool" },
        { name: "Shiki Brunestud", server: "Cerberus", text: "The Cake location is smart , took me some times , gg !" },
        { name: "Renarin Storm", server: "Sagittarius", text: "The cake was never a lie, Brina is" },
        { name: "Yui Dotharl", server: "Phantom", text: "Lack on minotaurs is disturbing. 4 stars out of 5." },
        { name: "Valkrie Silver", server: "Louisoix", text: "The cake is a lie" },
        { name: "Seddens Nov", server: "Sagittarius", text: "got tortured ;-; 10/10" },
        { name: "Flynn Fortuna", server: "Phantom", text: "i kept going back to the same 3 places as if anything would have changed in the last minute 10/10 very fun found em all" },
        { name: "Missy Charming", server: "Phantom", text: "it was a hollow victory I found the last one by accident when I fell :'c" },
        { name: "Naomi Valesti", server: "Phantom", text: "there is no cake cause I ATE IT ALL" },
        { name: "Pumpkin The-ashen-one", server: "Spriggan", text: "Found all 3" }
      ];

      const testimonials3 = [
        { name: "Tohsaka Ishtar", server: "Ragnarok", text: "Pretty good maze I loved it" },
        { name: "Guinevere Roseluin", server: "Zodiark", text: "Oh my, lets give this a go >>" },
        { name: "Boo Bas", server: "Odin", text: "door" },
        { name: "Keqing Yu", server: "Raiden", text: "I love my friends, I love my friends, I love my friends, I love my friends, I love my friends, I love my friends, I love my friends, my friiiiends" },
        { name: "E-e-e-e-e-e-e Eeeeee", server: "Phantom", text: "infuriating." },
        { name: "Koko Kami", server: "Spriggan", text: "Thanks for the cardio to get up the 2nd floor every time,,, awesome maze!" },
        { name: "Blueberry Slushie", server: "Spriggan", text: "4 paintings 400 falls.. 10/10 would fall again" },
        { name: "Rael Cebe", server: "Sagittarius", text: "Super fun, only lost my sanity 4867 times :D" },
        { name: "Ob Sidian", server: "Lich", text: "Awesome maze - definitely lost my soul in there somewhere, if anyone finds it pls return. THanks XD" },
        { name: "Rowena Helcaris", server: "Shiva", text: "With the power of friendship, we were able to do it!" },
        { name: "Thira Isobe", server: "Shiva", text: "One false step and you'd have to start all over again... it was exciting! :D" },
        { name: "Larijena Isobe", server: "Shiva", text: "Hit my head as a Femroe 357 times. 10/10 would recommend" },
        { name: "Aurora Kokoba", server: "Louisoix", text: "No clue how long it took me to get through this maze but I took severe brain damage from this." },
        { name: "Elera Shauni", server: "Phantom", text: "Thanks for the fun maze!" },
        { name: "Yumiko Sumeya", server: "Phantom", text: "That was fun and impressive" },
        { name: "Zeno Ritsuso", server: "Sagittarius", text: "Amazing maze <3 Will be back to find all paintings!" },
        { name: "Masha'to Nbolon", server: "Sagittarius", text: "Fun flying in the void....I mean fun maze! :D" },
        { name: "Missy Charming", server: "Phantom", text: "Not too difficult :D" },
        { name: "Neia Ra", server: "Sagittarius", text: "Salem burned those suspected of witchcraft at the stake. Your crimes are far worse and there is no punishment that can provide enough justice." },
        { name: "Pomhub Ceo", server: "Sagittarius", text: "Yet another maze heh" },
        { name: "Nora Sorrento", server: "Omega", text: "T'was a lot of fun .... tough i think i found the skeleton of lost peoples .... o/" },
        { name: "Sayaka Arita", server: "Omega", text: "most fun place tbh :3" },
        { name: "Gimimo' Ney", server: "Raiden", text: "lol" }
      ];

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      function generateCarouselItems(testimonials) {
        return testimonials
          .map((testimonial, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""} text-center">
              <h3>${testimonial.name}</h3>
              <h4>${testimonial.server}</h4>
              <p>${testimonial.text}</p>
            </div>
          `)
          .join("");
      }

      function generateCarousel(testimonials, carouselId) {
        return `
          <div id="${carouselId}" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              ${generateCarouselItems(testimonials)}
            </div>
          </div>
        `;
      }

      function renderCarousel(containerId, testimonials) {
        const uniqueCarouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;
        const shuffledTestimonials = shuffleArray([...testimonials]);
        const carouselContainer = document.getElementById(containerId);
        carouselContainer.querySelector(".col-md-12").innerHTML = generateCarousel(shuffledTestimonials, uniqueCarouselId);

        $(`#${uniqueCarouselId}`).carousel({
          interval: 5000,
        });
      }

      renderCarousel("carouselContainer1", testimonials1);
      renderCarousel("carouselContainer2", testimonials2);
      renderCarousel("carouselContainer3", testimonials3);
    });
