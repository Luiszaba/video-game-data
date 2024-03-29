# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  mike = User.create(firstname: "Mike", lastname: "Soares", email: "mikey.soares@gmail.com", password: "password")
  ryan = User.create(firstname: "Ryan", lastname: "Reece", email: "joe@gmail.com", password: "password")
  chris = User.create(firstname: "Chris", lastname: "Reece", email: "chris@gmail.com", password: "password")

  mike.secrets.create(content: "I secretly want to finish this course.")
  ryan.secrets.create(content: "I love sniffing farts.")
  chris.secrets.create(content: "I love cheese!")
  mike.secrets.create(content: "I need coffee!")
  chris.secrets.create(content: "My favorite color is pink.")
  ryan.secrets.create(content: "I like to eat cake.")
