<!-- 
This template helps us to create a new Post it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Post
        Author:@Ajay
        ****************************************************-->
      <div class="row justify-content-around">
        <div class="col-md-12 pl-4 pb-5">
          <slot name="formdata"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
