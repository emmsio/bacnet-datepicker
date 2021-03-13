
    var today = new Date();
    var maxdate = new Date();
    
    new Litepicker({

      setup: (picker) => {


          picker.on('before:show', (el) => {
            LoadSettings('global');
            console.log("settings have been loaded");
          });
        
          picker.on('show', () => {
            let date = picker.getDate().setMonth();
          
            if (date) {
              date.setMonth(date.getMonth() - 4);
              picker.gotoDate(date);
            }
          });
          
          picker.on('render', (ui) => {
            var startDateLitePicker = picker.getStartDate();
            var endDateLitePicker = picker.getEndDate();
            var mondayTitle = $("div[title='Monday']");
            var tuesdayTitle = $("div[title='Tuesday']");
            var wednesdayTitle = $("div[title='Wednesday']");
            var thursdayTitle = $("div[title='Thursday']");
            var fridayTitle = $("div[title='Friday']");
            var saturdayTitle = $("div[title='Saturday']");
            var sundayTitle = $("div[title='Sunday']");

            mondayTitle.html('M');
            tuesdayTitle.html('T');
            wednesdayTitle.html('W');
            thursdayTitle.html('T');
            fridayTitle.html('F');
            saturdayTitle.html('S');
            sundayTitle.html('S');

            console.log(startDateLitePicker);
            console.log(endDateLitePicker);
    
            $(".container__predefined-ranges").appendTo($("#global-daterange-edit"));
            $(".container__predefined-ranges").addClass("dropdown-menu").attr('id', 'dropdown-global-daterange-edit');
    
            $(".existing-button").remove();
            $(".existing-cancel").remove();
    
            $(".button-apply").appendTo($(".modal-footer"));
    
            $(".button-apply").attr({
              type:'submit',
              'data-dismiss':'modal',
              value:'Update Settings'
            });
    
            $(".button-apply").addClass("existing-button btn btn-outline-primary btn-sm");
           
    
            $(".button-cancel").appendTo($(".modal-footer"));
            $(".button-cancel").addClass("existing-cancel btn btn-outline-primary btn-sm");
    
            $(".button-cancel").attr({
              type:'button',
              'data-dismiss':'modal',
              value:'Cancel'
            
            });
          
            $(".reset-button").appendTo($(".container__footer"));
          
          });
    
          picker.on('button:apply', (date1, date2) => {
    
            var startDateLitePicker = picker.getStartDate();
            var endDateLitePicker = picker.getEndDate();
    
            console.log(startDateLitePicker);
            console.log(endDateLitePicker);
    
            $(startDateLitePicker).addClass("global-datestart-edit");
            $(endDateLitePicker).addClass("global-datend-edit");
    
            console.log("settings have been updated");
          });
          picker.on('mobilefriendly.before:show', (el) => {
            
          });
    
      },
 
      parentEl: document.getElementById('global-daterange-edit'),
      element: document.getElementById('button-global-daterange-edit'),
      inlineMode: true,
      singleMode: false,
      splitView: false,
      allowRepick: true,
      startDate: new Date(maxdate.getFullYear(),maxdate.getMonth()-3, maxdate.getDate()),
      endDate: new Date(),
      autoApply: false,
      numberOfMonths: 4,
      numberOfColumns: 4,
      resetButton: true,
      maxDate: maxdate,
      minDate: new Date(maxdate.getFullYear(),maxdate.getMonth()-3, maxdate.getDate()),

      plugins: ['ranges']['mobilefriendly'],
      ranges: {
  
          autoApply: false,
          customRanges: {
            
          '24 Hours': [new Date(today.getFullYear(), today.getMonth(), today.getDate()-1), new Date()],
          '48 Hours': [new Date(today.getFullYear(), today.getMonth(), today.getDate()-2), new Date()],
          '3 Days': [new Date(today.getFullYear(), today.getMonth(), today.getDate()-3), new Date()],
          '7 Days': [new Date(today.getFullYear(), today.getMonth(), today.getDate()-7), new Date()],
          '2 Weeks': [new Date(today.getFullYear(), today.getMonth(), today.getDate()-14), new Date()],
          '1 Month': [new Date(today.getFullYear(), today.getMonth()-1, today.getDate()), new Date()],
          '2 Months': [new Date(today.getFullYear(), today.getMonth()-2, today.getDate()), new Date()],
          'All Available (3 Months)': [new Date(today.getFullYear(), today.getMonth()-3, today.getDate()), new Date()]
          }

      },
      mobilefriendly: {
        breakpoint: 600,
        numberOfColumns: 1
      },
    
  })