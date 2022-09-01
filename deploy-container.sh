sudo docker pull willianblueshift/test-images:projeto-calculadora-juros-compostos
sudo docker stop projeto-calculadora-juros-compostos
sudo docker run -d --name projeto-calculadora-juros-compostos -v /home/ubuntu/projeto-calculadora-juros-compostos:/app -v /app/node_modules -p 80:80 --restart always willianblueshift/test-images:projeto-calculadora-juros-compostos
