pipeline {
    agent any
  stages {
    stage('Build and Push Docker Image') {
      environment {
        DOCKER_IMAGE = "wgk00133/student-is-api:${BUILD_NUMBER}"
      }
      steps {
        script {
            sh 'docker build -t ${DOCKER_IMAGE} .'
            def dockerImage = docker.image("${DOCKER_IMAGE}")
        withCredentials([usernamePassword(credentialsId: '56e71488-293d-43b8-88b8-8ec0c6cd2a53', passwordVariable: 'p', usernameVariable: 'u')]) {
                                  sh "docker login -u ${env.dockerhubuser} -p ${env.dockerhubpassword}"
                                  sh 'docker push "${DOCKER_IMAGE}"'        }
      }
    }

  }
}
}