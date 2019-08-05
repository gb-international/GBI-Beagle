<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-10">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add New Itinerary</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="sourceId">Source</label>
                                    <input type="text" class="form-control"  placeholder="Enter Source" >
                                </div>
                                <div class="form-group">
                                    <label for="destinationId">Destination</label>
                                    <input type="text" class="form-control"  placeholder="Enter Destination" >
                                </div>
                                <div class="form-group">
                                    <label for="noofdaysId">Number Of Days</label>
                                    <input type="text" class="form-control"  placeholder="Enter Number Of Days" >
                                </div>
                                <div class="form-group">
                                    <label for="titleId">Title</label>
                                    <input type="text" class="form-control"  placeholder="Enter Title" >
                                </div>
                                <div class="form-group">
                                    <label for="descriptionId">Description</label>
                                    <textarea class="form-control" placeholder="Enter Description"  id="descriptionId" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                 <label for="titleId">Tour Type</label>   
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="tourtype"  value="National" checked>
                                <label class="form-check-label" for="tourtypeId"> National</label>
                                </div>
                                </div>
                                 <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="tourtype"  value="International" >
                                <label class="form-check-label" for="tourtypeId"> International</label>
                                </div>
                                </div>


                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Save & Continue</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->
                </div>

            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
    export default {
        name: "New",
        
    }
</script>

<style scoped>

</style>