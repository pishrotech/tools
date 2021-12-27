$('select').on('change', function () {
    //ways to retrieve selected option and text outside handler
    console.log('Changed option value ' + this.value);
    console.log('Changed option text ' + $(this).find('option').filter(':selected').text());
  });
  