<template>
<div class="container">
    <div class="navbar">
        <ul style="list-style-type: none;padding: 0;    margin-left: 15px;margin-bottom: 0;">
            <li>About </li>
            <li>Services </li>
            <li>Clients </li>
            <li>Contact </li>
        </ul>

        <button class="btn" @click="sidenav"> Dropdown</button>
        <div class="dropdown" v-if="shownav">
    <ul style="list-style-type: none;margin-left: 15px; line-height: 30px;padding:0;">
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
    </div>

</div>




</template>

<script >
export default{
data(){
    return{
        shownav:false
    }
},
methods:{
    sidenav(){

        this.shownav=!this.shownav
       
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
}

.content{
    font-size: 25px;
    margin-left: 15px;
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
    width: 9%;
    color: grey;
    background: black;
    position: absolute;
    bottom: 280px;
    

}

.btn:focus{
    background:#008000;
    color:white;
}


</style>