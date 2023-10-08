<template>
<div class="container">
    <div class="navbar">
        <ul style="list-style-type: none;padding: 0;    margin-left: 15px;margin-bottom: 0;">
            <li @click='setTab("about_us")'>About </li>
            <li @click='setTab("services")'>Services </li>
            <li @click='setTab("clients")'>Clients </li>
            <li @click='setTab("contact")'>Contact </li>
        </ul>

        <button class="btn" @click="sidenav"> Dropdown </button>
        <div class="dropdown" v-if="shownav">
      <ul style="list-style-type: none;margin-left: 15px; line-height: 30px;padding:0;background: #262626;">
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
      </ul>
      </div>
        <li style="list-style-type: none;padding: 0;    margin-left: 15px;">Search</li>
    </div>
    <div class="content">

        <h2>Sidebar Dropdown</h2>
  <p>Click on the dropdown button to open the dropdown menu inside the side navigation.</p>
  <p>This sidebar is of full height (100%) and always shown.</p>
  <p>Some random text..</p>

  <about v-if='selected_tab="about_us"' />
  <sevices  v-if='selected_tab="services"'/>
  <clients  v-if='selected_tab="clients"'/>
  <contacts  v-if="selected_tab=3"/>
</div>

</div>




</template>

<script >

import about from '../components/about.vue';
import clients from '../components/clients.vue';
import sevices from '../components/sevices.vue';
import contact from '../components/contact.vue';

export default{
    components:{about,clients,sevices,contact},


data(){
    return{
        shownav:false,
        selected_tab:"services",
       
       
      
    }
},
methods:{

    setTab(current_tab)
    {
        this.selected_tab=current_tab
        console.log("current vlaue of selected tabl", this.selected_tab)

    },


    sidenav(){

        this.shownav=!this.shownav
       
    },

    showabout_content(){
            console.log("test")
            this.showabout=!this.showabout
        }

   

  
}

}
</script>

<style scoped>
.container{
   
    display:flex;
   
}

.navbar{
    background: black;
    color: grey;
    font-size: 25px;
    width: 10%;
    line-height: 40px;
    height: 100vh;

}

.btn{
    background: black;
    color: grey;
    border: none;
    font-size: 20px;
    margin-left: 15px;
    padding: 0;
    padding-top: 5px;
    padding-bottom: 5px;
}

.content{
    font-size: 25px;
    margin-left: 15px;
    width:100%;
    position: relative;
}
    
li:hover{
    color:white;
}

.btn:hover{
    color:white;
}

.dropdown{
    font-size: 20px;
    color: grey;
    background: black;
   
    

}

.btn:focus{
    background:#008000;
    color:white;
}

.select:focus{
    background:#008000;
    color:white;
}


</style>