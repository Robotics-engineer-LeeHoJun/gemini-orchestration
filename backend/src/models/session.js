class Session {
  constructor(id, project_path, created_at) {
    this.id = id;
    this.project_path = project_path;
    this.created_at = created_at;
  }
}

module.exports = Session;
