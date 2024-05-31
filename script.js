document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    initChessBoard();
});

function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    setInterval(() => {
        const now = new Date();
        datetimeElement.textContent = now.toLocaleString('tr-TR', {
            dateStyle: 'full',
            timeStyle: 'medium'
        });
    }, 1000);
}

function initChessBoard() {
    const board = Chessboard('chessboard', {
        draggable: true,
        dropOffBoard: 'trash',
        sparePieces: true
    });

    const game = new Chess();

    board.onDrop = function(source, target, piece, newPos, oldPos, orientation) {
        const move = game.move({
            from: source,
            to: target,
            promotion: 'q' // promote to a queen if possible
        });

        // illegal move
        if (move === null) return 'snapback';
    };
}
