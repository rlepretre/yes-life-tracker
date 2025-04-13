export function NotificationCenter({ notification }) {
  return (
    <div>
      {notification && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-2xl text-slate-700">{notification}</span>
          </div>
        </div>
      )}
    </div>
  );
}
