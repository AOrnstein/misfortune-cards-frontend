export default function InvitationCard({ game }) {
    const inviteUrl = `${window.location.origin}/lobby?game=${game.id}`;
  
    function copyInvite() {
      navigator.clipboard.writeText(inviteUrl);
    }
  
    return (
      <div className="detail-panel">
        <h2>Invite Players</h2>
        <p className="muted">Share this link with players joining your table.</p>
  
        <input value={inviteUrl} readOnly />
  
        <button type="button" onClick={copyInvite}>
          Copy Invite Link
        </button>
      </div>
    );
  }