
puts "🌱🌱🌱🪴🪴🪴 Seeding spices..."

User.destroy_all
Meeting.destroy_all
Employee.destroy_all
Note.destroy_all

User.create(username: "one", password: "123", email: "test1@gmail.com")
User.create(username: "two", password: "123", email: "test2@gmail.com")
User.create(username: "three", password: "123", email: "test3@gmail.com")

30.times do
  Employee.create(name: Faker::Name.unique.name, email: Faker::Internet.email(domain: 'gmail.com'))
end 


10.times do
  user = User.order('RANDOM()').first
  employee = Employee.order('RANDOM()').first

  meeting = Meeting.create(
    title: Faker::Movie.title,
    completed: Faker::Boolean.boolean,
    scheduled_date: Faker::Date.between(from: '2023-06-10', to: '2024-09-25'),
    user_id: user.id,
    employee_id: employee.id
  )
  
end 


10.times do 

  meeting = Meeting.order('RANDOM()').first
  note = Note.create(
    criteria1: Faker::Company.catch_phrase,
    note1: Faker::Company.bs,
    criteria2: Faker::Company.catch_phrase,
    note2: Faker::Company.bs,
    criteria3: Faker::Company.catch_phrase,
    note3: Faker::Company.bs,

    meeting_id: meeting.id
  )
end 

puts "🌳🌳🌳✅ Done seeding~!"