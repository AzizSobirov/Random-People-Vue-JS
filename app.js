var app = new Vue({
  el: '#app' ,
  data(){
    return {
      name: 'Aziz Sobirov',
      email: 'azizdev@example.com',
      img: './img/img.jpg',
      gender: 'male',
      phone:"+99894 000 00 00",
    };
  },
  methods: {
    async random(){
      const res = await fetch("https://randomuser.me/api")
      const { results } = await res.json()
      const data = results[0]
      console.log(results)
      this.name = data.name.first + " " + data.name.last,
      this.email = data.email,
      this.img = data.picture.large,
      this.gender = data.gender,
      this.phone = data.phone
    },
  },
})