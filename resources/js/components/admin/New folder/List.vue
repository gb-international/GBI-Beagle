<template>
    <div>
        <section class="content">
            <div class="row justify-content-around" >
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Itinerary List</h3>

                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-itinerary" style="color:#fff"> Add Itinerary</router-link>
                                </button>
                            </div>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Source</th>
                                  <th scope="col">Destination</th>
                                  <th scope="col">No Of Days</th>
                                  <th scope="col">Tour Type</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>
                                    <a href="">View</a>
                                    <a href="">Edit</a>
                                    <a href="">Delete</a>
                                  </td>
                                </tr>

                              </tbody>


                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>

                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "List",
        
    }
</script>

<style scoped>
</style>