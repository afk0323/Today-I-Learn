function solution(participant, completion) {
    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();

    return sortParticipant.find((name, idx) => name !== sortCompletion[idx]);
}
