new Vue({
  el: '#app',
  data: {
    newItem: '',
    newNote:'',
    items: [],
    activeItem: null,
    indexOfEdited : null,
    tempValue : null,
    tempStatus:null,
    filter : "",
    statuses : {"NA":"Non-active","PR":"Prospective","CR":"Current"}
  },
  methods: {
    addItem() {
      //unique ID -- just increment for now - TODO
      this.items.push({ id:this.items ? this.items.length + 1 : 0, title: this.newItem, completed: false,notes:[] });
      this.newItem = '';
    },
    addItemNote:function(item,note){
      // console.log("note",[note])
      if( this.newNote != "" ){
        item.notes.push(note);
      }
      this.disableEditing();
      this.newNote = '';
    },
    editNote : function(idx){
      this.tempValue = this.activeItem.notes[idx];
      this.indexOfEdited = idx;
    },

    disableEditing: function(){
      this.tempValue = null;
      this.indexOfEdited = null;
    },

    saveEditedNote: function(idx){
      this.activeItem.notes[idx] = this.tempValue;
      this.disableEditing();
      this.saveData();
    },

    removeNote:function(idx){
      //consider confirmation before deleting a note
      this.activeItem.notes.splice(idx,1);
      this.disableEditing();
    },

    setActive : function(item){
      this.activeItem = item ? this.items.filter( itm => itm.id == item.id )[0] : null;
      this.tempStatus = this.activeItem ? this.activeItem.status : null;
      this.disableEditing();//close any edited
      
    },
    nextItem : function(){//navigate to next customer
      const pos = this.items.map(function(item) { return item.id; }).indexOf(this.activeItem.id) + 1;
      if( pos < this.items.length ){ //if not at the end
        this.activeItem = this.items[pos];
      }
    },
    prevItem : function(){//navigate to previous customer
      const pos = this.items.map(function(item) { return item.id; }).indexOf(this.activeItem.id) - 1;
      if( pos >= 0 ){ //if not at the topmost
        this.activeItem = this.items[pos]; 
      }
    },

    toggleDetailsOnmobile : function(){
      document.getElementById("app").classList.toggle("detailsVisible");//toggle class to support responsiveness
    },

    handleClick : function(item){
      this.toggleDetailsOnmobile();
      this.setActive(item);
    },

    saveData : function(){
      //this should be server api call to save data
      localStorage.setItem('crm_demo_tomas', JSON.stringify(this.items));
    },

     dynamicSort : function(property) {
      //this should be server api call to load sorted data
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  },
  getDateTime : function(d, showTime){
    const datum = new Date(parseInt(d));
    return datum.toLocaleDateString("latn",{hour12:false, month:"short", day:"numeric", year:"numeric", hour: showTime ? "numeric" : undefined, minute: showTime ? "numeric" : undefined})
  }

  },
  mounted() {
    //this should be server api call to load data
    if (localStorage.getItem('crm_demo_tomas')) {
      this.items = JSON.parse(localStorage.getItem('crm_demo_tomas'));
    } else {
      //
    }
  },

  watch: {
    items: {
      handler() {
        this.saveData();
      },
      deep: true,
    },
  },

  computed: {
    filteredItems: function () {
      //this should be server api call to load filtered data
      var _this = this;
      return _this.items.filter(function (item) {
        return item.title.toLowerCase().indexOf(_this.filter.toLowerCase()) !== -1
      })
    }
  }


});
