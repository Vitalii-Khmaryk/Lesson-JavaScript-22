$(document).ready(function () {
  $(".box").each(function (index, elem) {
    $(elem).click(function () {
      let block = $(this);
      let isBig = block.width() > 200;
console.log(isBig,block);
console.log(($(".modal").width())/8);
      if (isBig) {
        block.width(200);
        block.height(200);
        block.css("z-index","2");
        $(".modal").css("z-index","-1");
        $(".modal").css('background-color', 'white');
       
        $(`.box:eq(${index})`).animate(
          {
            top: "0%",
            left: "0%",
          },
          1000,
          "easeInOutBack"
        );
      } else {
        block.width(450);
        block.height(400);
        block.css("z-index","5");
        $(".modal").css("z-index","4");
        $(".modal").css('background-color', 'rgba(0, 0, 0, 0.8)');
        $(`.box:eq(${index})`).animate(
          {
            top: /*"178%"*/($(".modal").height())/2,
            left: `${50 - index * 25}%`,
          },
          1000,
          "easeInOutBack"
        );
      }
    });
  });
});
