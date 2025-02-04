<template>
    <div class="mx-auto p-2 text-center">
        <h1 >Setting view template</h1>
    </div>

    <div class="row">
        <div class="col"></div>
        <div class="col-6 grid gap-0 row-gap-3">
            <div class="mx-auto p-2 g-col-6 text-center">
                <h2>Data upload</h2>
            </div>
            <div class="input-group p-2 g-col-6">
                <input type="file" class="form-control" id="dataInput">
                <button class="btn btn-outline-warning" type="button" id="dataInputBtn">Upload csv</button>
            </div>
            <p class="text-center fw-bold p-2 m-0 g-col-6"> or </p>
            <div class="input-group p-2 g-col-6">
                <span class="input-group-text" id="tokenInput">Baselinker token</span>
                <input type="password" class="form-control">
                <button class="btn btn-outline-warning" type="button" id="uploadBlToken">Save</button>
            </div>
        </div>
        <div class="col"></div>
    </div>
</template>

<style scoped>
button{
    color: black;
}
</style>