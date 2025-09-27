class Message {
  constructor(id, session_id, sender, content, attachments, created_at) {
    this.id = id;
    this.session_id = session_id;
    this.sender = sender;
    this.content = content;
    this.attachments = attachments;
    this.created_at = created_at;
  }
}

module.exports = Message;
