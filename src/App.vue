
<template>
  <div class="container pt-2">

    <div class="form-group">

      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
      
    </div>

    <div class="form-group">

      <label for="year">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">

    </div>

    <button class="btn btn-success" @click="createCar">Create Car</button>


    <button class="btn btn-primary" @click="loadCars">Load Car</button>

    <hr>

    <ul class="list-group">
      <li
          class="list-group-item"
          v-for="car of cars"
          :key="car.id"
      >
        <strong>{{car.name}}</strong> - {{ car.year }}
      </li>
    </ul>



  </div>
</template>

<script>
    export default {
      data () {
        return {
          carName: '',
          carYear: 2018,
          cars: [],
          resource: null
        }
      },
      methods: {
        createCar () {
          const car = {
            name: this.carName,
            year: this.carYear
          }

//          this.$http.post('http://localhost:3000/cars', car)
//              .then(responce => {
//            return responce.json()
//          })
//          .then(newCar => {
//            console.log(newCar)
//          })

          this.resource.save({}, car)
        },

        loadCars () {
          this.$http.get('cars')

//              .then(responce => {
//            return responce.json()
//          })
//        .then(cars => {
//            this.cars = cars
//        })
          this.resource.get().then(response => response.json())
            .then(cars => this.cars =cars)
        }
      },
      created (){
        this.resource = this.$resource('cars')
      }
    }

</script>

<style scoped>



</style>
