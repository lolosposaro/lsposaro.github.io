resource "kubernetes_namespace" "terra_ns" {
  metadata {
    name = "terra-${var.env}"
    labels = {
      env = var.env
    }
  }
}

resource "kubernetes_deployment" "pods_qa_1" {
  metadata {
    name      = "${var.app_name}-${var.env}"
    namespace = kubernetes_namespace.terra-ns.metadata[0].name
    labels = {
      env      = var.env
      app_name = var.app_name
    }
  }
  spec {
    replicas = 3
    selector {
      match_labels = { app_name = var.app_name }
    }
    template {
      metadata {
        labels = { app_name = var.app_name }
      }
      spec {
        container {
          name  = "container_1"
          image = var.img
        }
      }
    }

  }

}
