pipeline {
  agent {
    node {
      label 'api'
    }

  }
  stages {
    stage('stage') {
      agent {
        node {
          label '8.1'
        }

      }
      steps {
        build 'l'
      }
    }
    stage('production') {
      steps {
        error 'lol'
      }
    }
  }
  environment {
    stage = '1'
  }
}