def solution(id_list, report, k):
    answer = [0 for i in range(len(id_list))]
    report_user = []
    reported_user = []
    counter = []
    banned_user = []
    reported_times = {}
    for i in range(len(report)):
        counter.append(report[i].split())
        report_user.append(counter[i][0])
        reported_user.append(counter[i][1])
    for i in range(len(id_list)):
        times = reported_user.count(id_list[i])
        reported_times[id_list[i]] = times
    for i in range(len(id_list)):
        if reported_times.get(id_list[i]) >= k:
            banned_user.append(id_list[i])
    for i in range(len(id_list)):
        for k in range(len(report_user)):
            if id_list[i] == report_user[k] and reported_user[k] in banned_user:
                answer[i] += 1
    return answer

# report_user = []
# reported_user = []
# counter = []
# banned_user = []
# reported_times = {}
# answer = [0 for i in range(len(id_list))]
# for i in range(len(report)):
#     counter.append(report[i].split())
#     report_user.append(counter[i][0])
#     reported_user.append(counter[i][1])
# for i in range(len(id_list)):
#     times = reported_user.count(id_list[i])
#     reported_times[id_list[i]] = times

# for i in range(len(id_list)):
#     if reported_times.get(id_list[i]) >= 2:
#         banned_user.append(id_list[i])
# for i in range(len(id_list)):
#     for k in range(len(report_user)):
#         if id_list[i] == report_user[k] and reported_user[k] in banned_user:
#             answer[i] += 1

# print(report_user)
# print(reported_user)
# print(reported_times)
# print(banned_user)
solution(id_list, report, 2)
print(solution(id_list, report, 2))
