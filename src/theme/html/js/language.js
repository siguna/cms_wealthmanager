// initialize variables
const sum         = $('summary.summary'),
      det         = $('details.details'),
      sel         = $('select'),
      btn         = $('button.opt');

let   html        = $('button.selected').html();
let   btnsVal     = Array.prototype.slice.call(btn).map((item, index)=>{
                      let val = item.attributes['data-lang'].nodeValue;
                      let selected = item.attributes.class.nodeValue.includes('selected') ? 'true' : 'false';
                    return {val:val, selected:selected};
});

// lopp to create <option /> with correct values of languages
for(let i=0;i<btnsVal.length;i++){
  if(btnsVal[i].selected === 'true'){
     sel.append(`<option selected data-lang="${btnsVal[i].val}">${btnsVal[i].val}</option>`)
  }
    else{
       sel.append(`<option data-lang="${btnsVal[i].val}">${btnsVal[i].val}</option>`)
    }
}
//this cause <summary /> value always be the same as in .selected button
sum.html(html);

//function to handle mouseclicking 
btn.click(function(){
  let x = $('select option');
  let atr = $(this).attr('data-lang');
  let html = $(this).html();
  
  $(this).addClass('selected');
  btn.not($(this)).removeClass('selected')
  det.removeAttr('open');
  sum.html(html);
  x.each((i,el) => {
    if(el.attributes['data-lang'].nodeValue === atr){
      el.selected=true;
    }
    else{
      el.selected= false;
    }
  })
})     