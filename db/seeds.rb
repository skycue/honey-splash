# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest_user = User.create!(username: "guest", password: "guest_password") #Added

su = User.create!(username: "su", password: "su9011")

du = User.create!(username: "du", password: "du9011")

ju = User.create!(username: "ju", password: "ju9011")
