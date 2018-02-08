desc "Start Rails and React Servers"
task :start do
  puts "----------------|"
  puts "----------------|"
  puts "----------------| Starting ESPERA with React and Rails API..."
  puts "----------------|"
  puts "----------------| React Listening on: http://localhost:3000"
  puts "----------------| Rails API Listening on: http://localhost:3001"
  puts "----------------|"
  puts "----------------| Have a great day kind sir!"
  puts "----------------|"
  puts "----------------|"
  exec 'foreman start -p 3000'
end