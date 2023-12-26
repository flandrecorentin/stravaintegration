def _s_activities(activities):
    serialized_activities = []
    for activity in activities:
        serialized_activities.append(_s_activity(activity))
    return {"activities": serialized_activities}

def _s_activity(activity):
    return {"number": activity.number, "word": activity.word}